import {
  RESET_EVOLUTION,
  sendWorkerMessage,
  getInitialEvolution,
} from '../actions'
import { setSeed } from '../../settings/actions'

export const handleReset = store => next => action => {
  if (action.type === RESET_EVOLUTION) {
    store.dispatch(sendWorkerMessage(action))

    next(action)

    const seed = Math.round(Math.random() * 1000)
    store.dispatch(setSeed(seed))

    store.dispatch(getInitialEvolution())
    return
  }

  next(action)
}

export default handleReset
