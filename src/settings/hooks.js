import { settingsSelector } from './selectors'
import { useRedux } from '../hooks'

export const useSettings = () => {
  const { storeState } = useRedux()

  return settingsSelector(storeState)
}
