import { DONE_EVOLUTION } from '../actions'
import { predictionRequest } from './predictions'

const handleDone = store => next => action => {
  if (action.type === DONE_EVOLUTION) {
    next(action)

    predictionRequest(store)
    return
  }

  next(action)
}

export default handleDone
