import { createSelector } from 'reselect'

export const parametersSelector = createSelector(
  state => state.dcgp.parameters,
  parameters => parameters
)

export const activeKernelsSelector = createSelector(
  state => state.dcgp.parameters.kernels,
  kernels =>
    Object.keys(kernels).reduce((pre, cur) => {
      if (kernels[cur]) {
        pre.push(cur)
      }

      return pre
    }, [])
)

export const dcgpSelector = createSelector(
  state => state.dcgp.instance,
  dcgp => dcgp
)

export const stepsSelector = createSelector(
  state => state.dcgp.evolution.steps,
  steps => steps
)

export const currentStepSelector = createSelector(
  state => state.dcgp.evolution.steps,
  steps => {
    if (!steps.length) {
      return 0
    }

    return steps[steps.length - 1].step
  }
)

export const lossSelector = createSelector(
  state => state.dcgp.evolution.steps,
  state => state.dcgp.evolution.initial,
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
  state => state.dcgp.evolution,
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
