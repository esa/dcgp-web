import { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'
import {
  parametersSelector,
  currentStepSelector,
  lossSelector,
  evolutionStateSelector,
  stepsSelector,
} from './selectors'

export const useParameters = () => {
  const { storeState } = useContext(ReactReduxContext)

  return parametersSelector(storeState)
}

export const useSteps = () => {
  const { storeState } = useContext(ReactReduxContext)

  return stepsSelector(storeState)
}

export const useCurrentStep = () => {
  const { storeState } = useContext(ReactReduxContext)

  return currentStepSelector(storeState)
}

export const useLoss = () => {
  const { storeState } = useContext(ReactReduxContext)

  return lossSelector(storeState)
}

export const useEvolutionState = () => {
  const { storeState } = useContext(ReactReduxContext)

  return evolutionStateSelector(storeState)
}
