import { sendUpdate } from '../dcgpProxy'
import {
  TOGGLE_KERNEL,
  NETWORK_CHANGE,
  SET_ALGORITHM,
  setRows,
  setColumns,
  setArity,
  setLevelsBack,
  CHANGE_PARAMETER,
  algorithmsById,
  REMOVE_CONSTANT,
  setAlgorithm,
} from './actions'
import {
  networkSelector,
  algorithmSelector,
  currrentAlgorithmSelector,
  constantsSelector,
} from './selectors'
import {
  resetEvolutionRequest,
  evolutionConvergedReset,
} from '../evolution/actions'
import { isEvolvingSelector } from '../evolution/selectors'

export const handleKernelChange = store => next => action => {
  if (action.type === TOGGLE_KERNEL) {
    const state = store.getState()
    const { payload } = action

    if (!(payload in state.settings.kernels)) {
      throw new Error(`The specified kernelId "${payload}" does not exist.`)
    }

    next(action)

    store.dispatch(resetEvolutionRequest())
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

    dispatch(resetEvolutionRequest())
  }
}

export const handleAlgorithm = store => next => action => {
  next(action)

  if (action.type === SET_ALGORITHM) {
    const state = store.getState()
    const isEvolving = isEvolvingSelector(state)

    if (isEvolving) {
      const algorithm = currrentAlgorithmSelector(state)
      sendUpdate({ algorithm })
    }

    store.dispatch(evolutionConvergedReset())
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

    const state = store.getState()
    const isEvolving = isEvolvingSelector(state)

    if (isEvolving) {
      const algorithm = currrentAlgorithmSelector(state)
      sendUpdate({ algorithm })
    }
  }
}

export const handleRemoveConstant = store => next => action => {
  next(action)

  if (action.type === REMOVE_CONSTANT) {
    const updatedConstants = constantsSelector(store.getState())
    const currentAlgorithm = currrentAlgorithmSelector(store.getState())

    if (
      updatedConstants.length === 0 &&
      currentAlgorithm.id === 'gradientDescent'
    ) {
      store.dispatch(setAlgorithm('muPlusLambda'))
    }
  }
}

export default [
  handleAlgorithm,
  handleKernelChange,
  handleNetworkChange,
  handleParameterChange,
  handleRemoveConstant,
]
