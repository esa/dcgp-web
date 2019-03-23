import { createSelector } from 'reselect'

export const settingsSelector = createSelector(
  state => state.settings,
  settings => settings
)

export const networkSelector = createSelector(
  state => state.settings.network,
  settings => settings
)

export const kernelsSelector = createSelector(
  state => state.settings.kernels,
  settings => settings
)

export const algorithmSelector = createSelector(
  state => state.settings.algorithm,
  settings => settings
)

export const activeKernelsSelector = createSelector(
  state => state.settings.kernels,
  kernels =>
    Object.keys(kernels).reduce((pre, cur) => {
      if (kernels[cur]) {
        pre.push(cur)
      }

      return pre
    }, [])
)
