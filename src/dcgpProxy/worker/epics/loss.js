import { map, withLatestFrom } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { LOSS } from '../../constants'

const handleLoss = (event$, { expression$ }) =>
  event$.pipe(
    ofType(LOSS),
    withLatestFrom(expression$),
    map(getLossEvent)
  )

const lossEvent = (payload, meta) => ({
  type: LOSS,
  payload,
  meta,
})

const getLossEvent = ([event, expression]) => {
  const { payload = {}, meta } = event

  if (!expression) {
    return lossEvent('dcgp backend: Expression is not set.', {
      ...meta,
      isError: true,
    })
  }

  const { inputs, outputs, constants } = payload

  try {
    const loss = expression.loss(inputs, outputs, constants)
    return lossEvent(loss, meta)
  } catch (error) {
    return lossEvent(`dcgp backend: ${error}`, {
      ...meta,
      isError: true,
    })
  }
}

export default handleLoss
