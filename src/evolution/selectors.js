import { createSelector } from 'reselect'

export const dcgpSelector = state => state.evolution.instance

export const stepsSelector = state => state.evolution.steps

export const isDoneSelector = state => state.evolution.isDone

export const currentStepSelector = createSelector(
  stepsSelector,
  steps => {
    if (!steps.length) {
      return 0
    }

    return steps[steps.length - 1].step
  }
)

export const lossSelector = createSelector(
  stepsSelector,
  state => state.evolution.initial,
  (steps, initial) => {
    if (!steps.length) {
      if (initial) {
        return initial.loss
      }

      return null
    }

    return steps[steps.length - 1].loss
  }
)

export const evolutionStateSelector = createSelector(
  state => state.evolution,
  evolution => {
    if (evolution.isEvolving) {
      return 'EVOLVING'
    }

    if (evolution.steps.length) {
      return 'PAUSING'
    }

    return 'EMPTY'
  }
)
