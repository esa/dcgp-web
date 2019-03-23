import {
  TOGGLE_KERNEL,
  NETWORK_CHANGE,
  setRows,
  setColumns,
  setArity,
  setLevelsBack,
} from './actions'
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

export default [handleKernelChange, handleNetworkChange]
