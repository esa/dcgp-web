import { interval, merge, empty } from 'rxjs'
import {
  map,
  mapTo,
  scan,
  withLatestFrom,
  switchMap,
  takeWhile,
  takeUntil,
  startWith,
} from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { algorithmsById } from '../../../settings/actions'
import {
  LOSS_THRESHOLD,
  START,
  PAUSE,
  RESUME,
  STOP,
  STEP,
} from '../../constants'
import { step, progressEvent } from './step'

const makePause = event$ =>
  event$.pipe(
    ofType(PAUSE, STEP),
    mapTo(false)
  )

const makeResume = event$ =>
  event$.pipe(
    ofType(RESUME),
    mapTo(true)
  )

const makePauseableLoop = boolean$ =>
  boolean$.pipe(
    switchMap(bool => (bool ? interval() : empty())),
    scan(previous => ++previous, 0)
  )

const makeMayEvolve = event$ => {
  const pause$ = makePause(event$)
  const resume$ = makeResume(event$)

  return merge(pause$, resume$).pipe(startWith(true))
}

const handleStep = (event$, { expression$, algorithm$ }) => {
  const mayEvolve$ = makeMayEvolve(event$)

  const tick$ = makePauseableLoop(mayEvolve$)

  return event$.pipe(
    ofType(START),
    switchMap(event =>
      tick$.pipe(
        takeUntil(event$.pipe(ofType(STOP))),
        mapTo(event),
        withLatestFrom(expression$, algorithm$),
        scan(doStepGetProgressEvent, [
          null,
          {
            constants: event.payload.constants,
            time: Date.now(),
            scalar: 1,
          },
        ]),
        map(([action]) => action),
        takeWhile(({ payload }) => !payload.done)
      )
    )
  )
}

const capBetween = (lowerBound = 0, upperBound = 1) => value =>
  Math.max(lowerBound, Math.min(upperBound, value))

const capBetweenHalfAndTwo = capBetween(0.5, 2)

const doStepGetProgressEvent = ([, data], [event, expression, algorithm]) => {
  const { payload = {}, meta } = event

  if (!expression) {
    return progressEvent('dcgp backend: Expression is not set.', {
      ...meta,
      isError: true,
    })
  }

  // scalar makes sure there is a consistent progress framerate
  const { maxSteps } = algorithmsById[algorithm.id]
  const numSteps = maxSteps * data.scalar

  let result
  let returnEvent
  try {
    result = step(payload, expression, algorithm, data.constants, numSteps)
    const done = result.loss <= LOSS_THRESHOLD

    returnEvent = progressEvent(
      {
        ...result,
        steps: numSteps,
        done,
      },
      meta
    )
  } catch (error) {
    returnEvent = progressEvent(`dcgp backend: ${error}`, {
      ...meta,
      isError: true,
    })
  }

  //
  // calculate values for next call
  //

  const time = Date.now()
  const deltaTime = time - data.time
  const timeScalar = capBetweenHalfAndTwo(meta.progressInterval / deltaTime)
  const scalar = timeScalar * data.scalar

  const constants = result.constants || data.constants

  return [returnEvent, { time, scalar, constants }]
}

export default handleStep
