import {
  TOGGLE_KERNEL,
  NETWORK_CHANGE,
  ADD_CONSTANT,
  MAX_CONSTANTS,
  setRows,
  setColumns,
  setArity,
  setLevelsBack,
  REMOVE_CONSTANT,
} from './actions'
import { constantsSelector } from './selectors'
import { resetEvolution } from '../evolution/actions'

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

  if (action.type === REMOVE_CONSTANT) {
    next(action)
    store.dispatch(resetEvolution())
    return
  }

  next(action)
}

export default [handleConstants, handleKernelChange, handleNetworkChange]
