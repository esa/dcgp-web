import { RESET_EVOLUTION } from '../../actions'

const handleReset = store => next => action => {
  if (action.type === RESET_EVOLUTION) {
    const { expression } = store.getState()

    if (expression) {
      expression.destroy()
    }
  }

  next(action)
}

export default handleReset
