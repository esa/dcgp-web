import { createSelector } from 'reselect'

export const settingsSelector = state => state.settings

export const networkSelector = state => state.settings.network

export const kernelsSelector = state => state.settings.kernels

export const algorithmSelector = state => state.settings.algorithm

export const activeKernelsSelector = createSelector(
  kernelsSelector,
  kernels => {
    const kernelIds = Object.keys(kernels)

    const activeKernels = kernelIds.reduce((previous, current) => {
      if (kernels[current]) {
        previous.push(current)
      }

      return previous
    }, [])

    return activeKernels
  }
)

export const constantsSelector = state => state.settings.constants
