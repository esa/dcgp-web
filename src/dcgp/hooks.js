import { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'
import { parametersSelector } from './selectors'

export const useParameters = () => {
  const { storeState } = useContext(ReactReduxContext)

  return parametersSelector(storeState)
}
