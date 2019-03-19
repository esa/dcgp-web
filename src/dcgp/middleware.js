import initializer from 'dcgp'
import {
  SET_DCGP_INSTANCE,
  START_EVOLUTION,
  PAUSE_EVOLUTION,
  LOSS_THRESHOLD,
  TOGGLE_KERNEL,
  NETWORK_CHANGE,
  setRows,
  setColumns,
  setArity,
  setLevelsBack,
  setSeed,
  WORKER_MESSAGE_OUT,
  sendWorkerMessage,
  RESET_EVOLUTION,
  resetEvolution,
} from './actions'
import {
  activeKernelsSelector,
  parametersSelector,
  currentStepSelector,
  lossSelector,
} from './selectors'
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
    })
  } else {
    next(action)
  }
}

export const evolution = store => next => action => {
  if (action.type === PAUSE_EVOLUTION) {
    store.dispatch(sendWorkerMessage(action))
  }

  if (action.type === RESET_EVOLUTION) {
    store.dispatch(sendWorkerMessage(action))

    const seed = Math.round(Math.random() * 1000)
    store.dispatch(setSeed(seed))
  }

  if (action.type === START_EVOLUTION) {
    const state = store.getState()

    const loss = lossSelector(state)

    if (loss !== null && loss <= LOSS_THRESHOLD) {
      return
    }

    next(action)

    const activeKernelIds = activeKernelsSelector(state)
    const parameters = parametersSelector(state)
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

  next(action)
}

export const handleKernelChange = store => next => action => {
  next(action)

  if (action.type === TOGGLE_KERNEL) {
    store.dispatch(resetEvolution())
  }
}

export const handleNetworkChange = store => next => action => {
  next(action)

  if (action.type === NETWORK_CHANGE) {
    const { dispatch } = store
    const {
      payload: { settingId, value },
    } = action

    switch (settingId) {
      case 'rows':
        dispatch(setRows(value))
        break
      case 'columns':
        dispatch(setColumns(value))
        break
      case 'arity':
        dispatch(setArity(value))
        break
      case 'levelsBack':
        dispatch(setLevelsBack(value))
        break
      default:
        throw new Error(`settingId ${settingId} is not allowed`)
    }

    dispatch(resetEvolution())
  }
}

export default [
  setWorker,
  handleWorkerMessages,
  handleKernelChange,
  handleKernelChange,
  evolution,
  handleNetworkChange,
]
