import {
  TOGGLE_KERNEL,
  NETWORK_CHANGE,
  ADD_CONSTANT,
  MAX_CONSTANTS,
  RESET_CONSTANTS,
  setConstants,
  SET_ALGORITHM,
  setRows,
  setColumns,
  setArity,
  setLevelsBack,
  REMOVE_CONSTANT,
  CHANGE_PARAMETER,
  algorithmsById,
} from './actions'
import {
  constantsSelector,
  networkSelector,
  algorithmSelector,
} from './selectors'
import { resetEvolution, sendWorkerMessage } from '../evolution/actions'
import { isEvolvingSelector } from '../evolution/selectors'

export const handleKernelChange = store => next => action => {
  if (action.type === TOGGLE_KERNEL) {
    const state = store.getState()
    const { payload } = action

    if (!(payload in state.settings.kernels)) {
      throw new Error(`The specified kernelId "${payload}" does not exist.`)
    }

    next(action)

    store.dispatch(resetEvolution())
    return
  }

  next(action)
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
        // set the levels back if it will be higher than coloms + 1
        // value + 1 because the levelsBack may also reach the inputs
        if (value + 1 < networkSelector(store.getState()).levelsBack) {
          dispatch(setLevelsBack(value + 1))
        }
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

export const handleConstants = store => next => action => {
  if (action.type === ADD_CONSTANT) {
    const constants = constantsSelector(store.getState())

    if (constants.length >= MAX_CONSTANTS) return

    const initialConstant = constants.length + 1

    next({ ...action, payload: initialConstant })

    store.dispatch(resetEvolution())
    return
  }

  if (action.type === RESET_CONSTANTS) {
    const constants = constantsSelector(store.getState())
    next(action)

    const newConstants = Array(constants.length)
      .fill(0)
      .map((val, i) => i + 1)

    next(setConstants(newConstants))
    return
  }

  if (action.type === REMOVE_CONSTANT) {
    next(action)
    store.dispatch(resetEvolution())
    return
  }

  next(action)
}

export const handleAlgorithm = store => next => action => {
  next(action)

  if (action.type === SET_ALGORITHM) {
    const isEvolving = isEvolvingSelector(store.getState())

    if (isEvolving) {
      store.dispatch(sendWorkerMessage(action))
    }
  }
}

export const handleParameterChange = store => next => action => {
  next(action)

  if (action.type === CHANGE_PARAMETER) {
    const { id: algorithmId } = algorithmSelector(store.getState())
    const { parameterId, value } = action.payload

    const parameter = algorithmsById[algorithmId].parameters[parameterId]

    const nextAction = parameter.action(value)

    store.dispatch(nextAction)
    store.dispatch(sendWorkerMessage(nextAction))
  }
}

export default [
  handleAlgorithm,
  handleConstants,
  handleKernelChange,
  handleNetworkChange,
  handleParameterChange,
]
