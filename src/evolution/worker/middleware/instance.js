import { SET_DCGP_INSTANCE, setDcgpInstance } from '../../actions'

const handleInstance = store => next => action => {
  if (action.type === SET_DCGP_INSTANCE) {
    const { payload: dcgp } = action

    postMessage(setDcgpInstance({ module: dcgp.module }))
  }

  next(action)
}

export default handleInstance
