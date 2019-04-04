import {
  WORKER_MESSAGE_OUT,
  SET_DCGP_INSTANCE,
  getInitialEvolution,
} from '../actions'
// eslint-disable-next-line import/default
import Worker from '../worker/dcgp.worker'

const handleWorker = store => {
  const worker = new Worker()

  worker.onmessage = message => {
    store.dispatch(message.data)
  }

  return next => action => {
    if (action.type === WORKER_MESSAGE_OUT) {
      worker.postMessage(action.payload)
    }

    if (action.type === SET_DCGP_INSTANCE) {
      // initializer(action.payload.module).then(dcgp => {
      //   next(addPayload(action, dcgp))

      //   store.dispatch(getInitialEvolution())
      // })
      store.dispatch(getInitialEvolution())
    }

    next(action)
  }
}

export default handleWorker
