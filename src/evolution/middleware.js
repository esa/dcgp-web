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
  STEP_EVOLUTION,
} from './actions'
import { setSeed } from '../settings/actions'
import {
  currentStepSelector,
  dcgpSelector,
  lossSelector,
  chromosomeSelector,
} from './selectors'
import { activeKernelsSelector, settingsSelector } from '../settings/selectors'
import { inputsSelector, labelsSelector } from '../dataset/selectors'
// eslint-disable-next-line import/default
import Worker from './worker/dcgp.worker'

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
      next({
        ...action,
        payload: { ...action.payload, ...dcgp },
      })

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
    const chromosome = chromosomeSelector(state)
    const inputs = inputsSelector(state)
    const labels = labelsSelector(state)

    store.dispatch(
      sendWorkerMessage({
        ...action,
        payload: {
          ...action.payload,
          activeKernelIds,
          parameters,
          step: currentStep,
          inputs,
          labels,
          chromosome,
        },
      })
    )
    return
  }

  if (action.type === INITIAL_EVOLUTION) {
    const state = store.getState()

    const dcgp = dcgpSelector(state)
    const activeKernelIds = activeKernelsSelector(state)
    const parameters = settingsSelector(state)
    const inputs = inputsSelector(state)
    const labeles = labelsSelector(state)

    const {
      seed,
      network: { rows, columns, arity, levelsBack },
      algorithm: { id: algorithmId },
    } = parameters

    // this should move to dcgp.worker.js
    const myKernelSet = new dcgp.KernelSet(activeKernelIds)
    const myExpression = new dcgp.Expression(
      inputs[0].length,
      labeles[0].length,
      rows,
      columns,
      levelsBack,
      arity,
      myKernelSet,
      seed
    )

    const resultObj = dcgp.algorithms[algorithmId](
      myExpression,
      1,
      0,
      inputs,
      labeles
    )

    myKernelSet.destroy()
    myExpression.destroy()

    next({ ...action, payload: { ...action.payload, ...resultObj } })
    return
  }

  next(action)
}

export default [setWorker, handleWorkerMessages, handleEvolution]
