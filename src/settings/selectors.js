import { createSelector } from 'reselect'

export const settingsSelector = createSelector(
  state => state.settings,
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
