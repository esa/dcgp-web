import { createSelector } from 'reselect'

export const settingsSelector = state => state.settings

export const seedSelector = state => state.settings.seed

export const networkSelector = state => state.settings.network

export const kernelsSelector = state => state.settings.kernels

export const algorithmSelector = state => state.settings.algorithm

export const currrentAlgorithmSelector = createSelector(
  algorithmSelector,
  algorithm => {
    return {
      id: algorithm.id,
      ...algorithm.byId[algorithm.id],
    }
  }
)

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
