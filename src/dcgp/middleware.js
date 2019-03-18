import initializer from 'dcgp'
import dcgpUrl from 'dcgp/dcgp.wasm'
import {
  setDcgpInstance,
  START_EVOLUTION,
  NETWORK_CHANGE,
  setRows,
  setColumns,
  setArity,
  setLevelsBack,
} from './actions'
import {
  activeKernelsSelector,
  dcgpSelector,
  parametersSelector,
} from './selectors'

export const initializing = ({ dispatch }) => {
  initializer(fetch(dcgpUrl)).then(dcgp => {
    dispatch(setDcgpInstance(dcgp))
  })

  return next => action => next(action)
}

export const evolution = store => next => action => {
  next(action)

  if (action.type === START_EVOLUTION) {
    const state = store.getState()

    const activeKernelIds = activeKernelsSelector(state)
    const parameters = parametersSelector(state)
    const {
      seed,
      network: { rows, columns, arity, levelsBack },
      algorithm: { id: algorithmId, maxGenerations, offsprings },
    } = parameters
    const dcgp = dcgpSelector(state)

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

    for (let index = 0; index < 20; index++) {
      const resultObj = dcgp.algorithms[algorithmId](
        myExpression,
        offsprings,
        maxGenerations,
        inputs,
        outputs
      )
      console.log(resultObj, myExpression.getEquation(['x', '1']))
    }

    myKernelSet.destroy()
    myExpression.destroy()
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
  }
}

export default [initializing, evolution, handleNetworkChange]
