import {
  EVOLUTION_PROGRESS,
  LOSS_THRESHOLD,
  doneEvolution,
} from '../../actions'
import throttle from '../../../utils/throttle'

const throttledPostMessage = throttle(message => {
  postMessage(message)
}, Math.round(1000 / 15))

const handleProgress = store => next => action => {
  if (action.type === EVOLUTION_PROGRESS) {
    const { payload: result } = action
    const { hasReset } = store.getState()

    if (!hasReset) {
      next(action)

      if (action.meta && action.meta.throttle) {
        if (result.loss <= LOSS_THRESHOLD) {
          postMessage(action)

          store.dispatch(doneEvolution())
        } else {
          throttledPostMessage(action)
        }
      } else {
        postMessage(action)
      }
    }

    return
  }

  next(action)
}

export default handleProgress
