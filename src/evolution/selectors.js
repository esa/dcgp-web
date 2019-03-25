import { createSelector } from 'reselect'

export const dcgpSelector = createSelector(
  state => state.evolution.instance,
  dcgp => dcgp
)

export const stepsSelector = createSelector(
  state => state.evolution.steps,
  steps => steps
)

export const isDoneSelector = createSelector(
  state => state.evolution.isDone,
  steps => steps
)

export const currentStepSelector = createSelector(
  state => state.evolution.steps,
  steps => {
    if (!steps.length) {
      return 0
    }

    return steps[steps.length - 1].step
  }
)

export const lossSelector = createSelector(
  state => state.evolution.steps,
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

export const chromosomeSelector = createSelector(
  state => state.evolution.steps,
  state => state.evolution.initial,
  (steps, initial) => {
    if (!steps.length) {
      if (initial) {
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
