import { of, merge, from } from 'rxjs'
import { tap, filter, mergeMap, switchMap, takeUntil } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import { setConstants, setSeed } from '../settings/actions'
import {
  doneEvolution,
  pauseEvolutionRequest,
  evolutionProgress,
  initialEvolutionRequest,
  RESET,
  RESUME,
  PAUSE,
  START,
  STEP,
} from './actions'
import { evolution, doStep } from '../dcgpProxy'

const handleEvolution = action$ => {
  const reset$ = action$.pipe(ofType(RESET))

  const resetAction$ = reset$.pipe(
    mergeMap(() => {
      const seed = Math.round(Math.random() * 1000)

      return of(setSeed(seed), initialEvolutionRequest())
    })
  )

  const pause$ = action$.pipe(
    ofType(PAUSE),
    tap(() => evolution.pause()),
    filter(() => false)
  )

  const resume$ = action$.pipe(
    ofType(RESUME),
    tap(() => evolution.resume()),
    filter(() => false)
  )

  const progress$ = action$.pipe(
    ofType(START),
    switchMap(({ payload }) =>
      evolution.start(payload).pipe(takeUntil(reset$))
    ),
    mergeMap(handleProgress)
  )

  return merge(pause$, resume$, progress$, resetAction$)
}

const handleStep = action$ =>
  action$.pipe(
    ofType(STEP),
    mergeMap(({ payload }) => from(doStep(payload))),
    mergeMap(handleProgress)
  )

const handleProgress = progress => {
  const actions = [evolutionProgress(progress)]

  if (progress.isPausing) {
    actions.push(pauseEvolutionRequest(progress.constants))
  }

  if (progress.constants) {
    actions.push(setConstants(progress.constants))
  }

  if (progress.done) {
    actions.push(doneEvolution())
  }

  return of(...actions)
}

export default combineEpics(handleEvolution, handleStep)
