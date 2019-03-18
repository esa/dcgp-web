import { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'

export const useDispatch = () => {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext)

  return dispatch
}
