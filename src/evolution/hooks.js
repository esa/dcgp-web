import { useRedux } from '../hooks'
import {
  currentStepSelector,
  lossSelector,
  evolutionStateSelector,
  stepsSelector,
} from './selectors'

export const useSteps = () => {
  const { storeState } = useRedux()

  return stepsSelector(storeState)
}

export const useCurrentStep = () => {
  const { storeState } = useRedux()

  return currentStepSelector(storeState)
}

export const useLoss = () => {
  const { storeState } = useRedux()

  return lossSelector(storeState)
}

export const useEvolutionState = () => {
  const { storeState } = useRedux()

  return evolutionStateSelector(storeState)
}
