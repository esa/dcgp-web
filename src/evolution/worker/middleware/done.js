import { DONE_EVOLUTION } from '../../actions'

const handleDone = store => next => action => {
  if (action.type === DONE_EVOLUTION) {
    postMessage(action)
  }

  next(action)
}

export default handleDone
