import { map, withLatestFrom } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { PREDICTION } from '../../constants'

const handlePrediction = (event$, { expression$ }) =>
  event$.pipe(
    ofType(PREDICTION),
    withLatestFrom(expression$),
    map(getPredictionEvent)
  )

const predictionEvent = (payload, meta) => ({
  type: PREDICTION,
  payload,
  meta,
})

const getPredictionEvent = ([event, expression]) => {
  const { payload = {}, meta } = event

  if (!expression) {
    return predictionEvent('dcgp backend: Expression is not set.', {
      ...meta,
      isError: true,
    })
  }

  const { inputs, constants = [] } = payload

  const constantsArray = Array.isArray(inputs[0])
    ? constants.map(c => Array(inputs[0].length).fill(c))
    : []

  try {
    const predictions = expression.evaluate(...inputs, ...constantsArray)

    return predictionEvent(predictions, meta)
  } catch (error) {
    return predictionEvent(`dcgp backend: ${error}`, { ...meta, isError: true })
  }
}

export default handlePrediction
