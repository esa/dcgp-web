import { SET_DCGP_INSTANCE, setDcgpInstance } from '../../actions'

const handleInstance = store => next => action => {
  if (action.type === SET_DCGP_INSTANCE) {
    const { payload: dcgpModule } = action

    postMessage(setDcgpInstance({ module: dcgpModule }))
  }

  next(action)
}

export default handleInstance
