import { createSelector } from 'reselect'

export const settingsSelector = state => state.settings

export const networkSelector = state => state.settings.network

export const kernelsSelector = state => state.settings.kernels

export const algorithmSelector = state => state.settings.algorithm

export const activeKernelsSelector = createSelector(
  kernelsSelector,
  kernels =>
    Object.keys(kernels).reduce((pre, cur) => {
      if (kernels[cur]) {
        pre.push(cur)
      }

      return pre
    }, [])
)
