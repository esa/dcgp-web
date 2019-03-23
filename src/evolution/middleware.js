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
} from './actions'
import { setSeed } from '../settings/actions'
import { currentStepSelector, dcgpSelector, lossSelector } from './selectors'
import { activeKernelsSelector, settingsSelector } from '../settings/selectors'
// eslint-disable-next-line import/default
import Worker from './dcgp.worker'

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

  if (action.type === START_EVOLUTION) {
    const state = store.getState()

    const loss = lossSelector(state)

    if (loss !== null && loss <= LOSS_THRESHOLD) {
      return
    }

    next(action)

    const activeKernelIds = activeKernelsSelector(state)
    const parameters = settingsSelector(state)
    const currentStep = currentStepSelector(state)

    store.dispatch(
      sendWorkerMessage({
        ...action,
        payload: {
          ...action.payload,
          activeKernelIds,
          parameters,
          step: currentStep,
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

    const {
      seed,
      network: { rows, columns, arity, levelsBack },
      algorithm: { id: algorithmId },
    } = parameters

    // this should move to dcgp.worker.js
    const myKernelSet = new dcgp.KernelSet(activeKernelIds)
    const myExpression = new dcgp.Expression(
      2,
      1,
      rows,
      columns,
      levelsBack,
      arity,
      myKernelSet,
      seed
    )

    // some simple dataset: y = 2x + 2
    const inputs = [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
    const outputs = [[2], [4], [6], [8], [10]]

    const resultObj = dcgp.algorithms[algorithmId](
      myExpression,
      1,
      0,
      inputs,
      outputs
    )

    next({ ...action, payload: { ...action.payload, ...resultObj } })
    return
  }

  next(action)
}

export default [setWorker, handleWorkerMessages, handleEvolution]
