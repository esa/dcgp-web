import { createSelector } from 'reselect'

export const stepsSelector = state => state.evolution.steps
export const isDoneSelector = state => state.evolution.isDone
export const isEvolvingSelector = state => state.evolution.isEvolving

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
      if (initial && typeof initial.loss === 'number') {
        return initial.loss
      }

      return null
    }

    return steps[steps.length - 1].loss
  }
)

export const secondLastlossSelector = createSelector(
  stepsSelector,
  steps => {
    if (steps.length < 2) {
      return null
    }

    return steps[steps.length - 2].loss
  }
)

export const chromosomeSelector = createSelector(
  state => state.evolution.steps,
  state => state.evolution.initial,
  (steps, initial) => {
    if (!steps.length) {
      if (initial && initial.chromosome) {
        return initial.chromosome
      }

      return null
    }

    return steps[steps.length - 1].chromosome
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

export const warningSelector = createSelector(
  state => state.evolution.isConverged,
  isConverged => {
    const warnings = []

    if (isConverged) {
      warnings.push('Evolution has converged.')
    }

    return warnings
  }
)
