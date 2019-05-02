import { INITIAL_REQUEST, initialEvolution } from '../actions'
import {
  activeKernelsSelector,
  networkSelector,
  constantsSelector,
  seedSelector,
} from '../../settings/selectors'
import { inputsSelector, outputsSelector } from '../../dataset/selectors'

import { getLoss } from '../../dcgpProxy'

export const handleInitialEvolution = store => next => async action => {
  next(action)

  if (action.type === INITIAL_REQUEST) {
    const state = store.getState()

    const kernelIds = activeKernelsSelector(state)
    const network = networkSelector(state)
    const inputs = inputsSelector(state)
    const outputs = outputsSelector(state)
    const seed = seedSelector(state)
    const constants = constantsSelector(state)

    const loss = await getLoss({
      expression: {
        ...network,
        kernelIds,
        inputs: inputs.length + constants.length,
        outputs: outputs.length,
        seed,
      },
      inputs,
      outputs,
      constants,
    })

    store.dispatch(initialEvolution({ loss }))
  }
}

export default handleInitialEvolution
