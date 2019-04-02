import initializer from 'dcgp'
import {
  SET_DCGP_INSTANCE,
  START_EVOLUTION,
  PAUSE_EVOLUTION,
  LOSS_THRESHOLD,
  INITIAL_EVOLUTION,
  setInitialEvolution,
  WORKER_MESSAGE_OUT,
  sendWorkerMessage,
  RESET_EVOLUTION,
  DONE_EVOLUTION,
  STEP_EVOLUTION,
  pauseEvolution,
  EVOLUTION_PROGRESS,
} from './actions'
import { calcPredictions, CALC_PREDICTIONS } from '../dataset/actions'
import { setSeed } from '../settings/actions'
import { addPayload } from '../utils/actions'
import {
  currentStepSelector,
  lossSelector,
  secondLastlossSelector,
} from './selectors'
import { activeKernelsSelector, settingsSelector } from '../settings/selectors'
import {
  inputsSelector,
  inputKeysSelector,
  labelsSelector,
  predictionKeysSelector,
  predictionsSubscribersSelector,
} from '../dataset/selectors'
// eslint-disable-next-line import/default
import Worker from './worker/dcgp.worker'
import throttle from '../utils/throttle'

const predictionRequest = store => {
  const state = store.getState()

  const inputs = inputsSelector(state)
  const inputKeys = inputKeysSelector(state)
  const predictionKeys = predictionKeysSelector(state)

  store.dispatch(
    calcPredictions({
      inputs,
      inputKeys,
      predictionKeys,
    })
  )
}

const throttledPredictionRequest = throttle(store => {
  predictionRequest(store)
}, Math.round(1000 / 2))

export const setWorker = ({ dispatch }) => {
  const worker = new Worker()

  worker.onmessage = message => {
    dispatch(message.data)
  }

  return next => action => {
    if (action.type === WORKER_MESSAGE_OUT) {
      worker.postMessage(action.payload)
    }

    next(action)
  }
}

export const handleWorkerMessages = store => next => action => {
  if (action.type === SET_DCGP_INSTANCE) {
    initializer(action.payload.module).then(dcgp => {
      next(addPayload(action, dcgp))

      store.dispatch(setInitialEvolution())
    })

    return
  }

  next(action)
}

export const handleEvolution = store => next => action => {
  if (action.type === PAUSE_EVOLUTION) {
    store.dispatch(sendWorkerMessage(action))
  }

  if (action.type === RESET_EVOLUTION) {
    store.dispatch(sendWorkerMessage(action))

    next(action)

    const seed = Math.round(Math.random() * 1000)
    store.dispatch(setSeed(seed))

    store.dispatch(setInitialEvolution())
    return
  }

  if (action.type === STEP_EVOLUTION) {
    store.dispatch(pauseEvolution())
  }

  if (action.type === START_EVOLUTION || action.type === STEP_EVOLUTION) {
    const state = store.getState()
    const loss = lossSelector(state)

    if (loss !== null && loss <= LOSS_THRESHOLD) {
      return
    }

    next(action)

    const activeKernelIds = activeKernelsSelector(state)
    const parameters = settingsSelector(state)
    const currentStep = currentStepSelector(state)
    const inputs = inputsSelector(state)
    const labels = labelsSelector(state)

    store.dispatch(
      sendWorkerMessage(
        addPayload(action, {
          activeKernelIds,
          parameters,
          step: currentStep,
          inputs,
          labels,
        })
      )
    )

    return
  }

  if (action.type === INITIAL_EVOLUTION) {
    if (!action.payload) {
      const state = store.getState()

      const activeKernelIds = activeKernelsSelector(state)
      const parameters = settingsSelector(state)
      const inputs = inputsSelector(state)
      const labels = labelsSelector(state)

      store.dispatch(
        sendWorkerMessage(
          addPayload(action, {
            activeKernelIds,
            parameters,
            inputs,
            labels,
          })
        )
      )

      throttledPredictionRequest(store)
    } else {
      next(action)
    }

    return
  }

  if (action.type === EVOLUTION_PROGRESS) {
    const state = store.getState()
    const secondLastLoss = secondLastlossSelector(state)
    const lastLoss = lossSelector(state)
    const predicitionSubscribers = predictionsSubscribersSelector(state)

    if (secondLastLoss && secondLastLoss > lastLoss && predicitionSubscribers) {
      throttledPredictionRequest(store)
    }
  }

  if (action.type === CALC_PREDICTIONS) {
    store.dispatch(sendWorkerMessage(action))
  }

  if (action.type === DONE_EVOLUTION) {
    next(action)

    predictionRequest(store)
    return
  }

  next(action)
}

export default [setWorker, handleWorkerMessages, handleEvolution]
