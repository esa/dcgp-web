import { PAUSE_EVOLUTION, sendWorkerMessage } from '../actions'

export const handlePause = store => next => action => {
  if (action.type === PAUSE_EVOLUTION) {
    store.dispatch(sendWorkerMessage(action))
  }

  next(action)
}

export default handlePause
