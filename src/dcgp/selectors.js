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
