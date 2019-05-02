import { of, merge } from 'rxjs'
import { tap, filter, mergeMap, switchMap, takeUntil } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import {
  doneEvolution,
  evolutionProgress,
  RESET_EVOLUTION,
  RESUME_EVOLUTION,
  PAUSE_EVOLUTION,
  START_EVOLUTION,
} from './actions'
import { evolution } from '../dcgpProxy'

const handleEvolution = action$ => {
  const stop$ = action$.pipe(ofType(RESET_EVOLUTION))

  const pause$ = action$.pipe(
    ofType(PAUSE_EVOLUTION),
    tap(() => evolution.pause()),
    filter(() => false)
  )

  const resume$ = action$.pipe(
    ofType(RESUME_EVOLUTION),
    tap(() => evolution.resume()),
    filter(() => false)
  )

  const progress$ = action$.pipe(
    ofType(START_EVOLUTION),
    switchMap(({ payload }) => evolution.start(payload).pipe(takeUntil(stop$))),
    mergeMap(progress => {
      if (progress.done) return of(evolutionProgress(progress), doneEvolution())
      return of(evolutionProgress(progress))
    })
  )
  return merge(pause$, resume$, progress$)
}

export default combineEpics(handleEvolution)
