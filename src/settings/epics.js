import { map, withLatestFrom, filter, mapTo } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'

import {
  REQUEST_ADD_CONSTANT,
  REQUEST_RESET_CONSTANTS,
  ADD_CONSTANT,
  MAX_CONSTANTS,
  setConstants,
  addConstant,
  REMOVE_CONSTANT,
} from './actions'
import { resetEvolution } from '../evolution/actions'
import { constantsSelector } from './selectors'

const isNumber = value => typeof value === 'number'

const handleNewConstants = (action$, state$) =>
  action$.pipe(
    ofType(REQUEST_ADD_CONSTANT),
    withLatestFrom(state$),
    map(([action, state]) => [action, constantsSelector(state)]),
    filter(([, constants]) => constants.length < MAX_CONSTANTS),
    map(([action, constants]) => {
      const requestedConstant = action.payload

      if (isNumber(requestedConstant) && isFinite(requestedConstant)) {
        return requestedConstant
      }

      return constants.length + 1
    }),
    map(constant => addConstant(constant))
  )

const handleResetConstants = (action$, state$) =>
  action$.pipe(
    ofType(REQUEST_RESET_CONSTANTS),
    withLatestFrom(state$),
    map(([, state]) => constantsSelector(state)),
    map(constants =>
      Array(constants.length)
        .fill(0)
        .map((_, i) => i + 1)
    ),
    map(resetedConstants => setConstants(resetedConstants))
  )

const handleEvolutionReset = action$ =>
  action$.pipe(
    ofType(ADD_CONSTANT, REMOVE_CONSTANT),
    mapTo(resetEvolution())
  )

export default combineEpics(
  handleNewConstants,
  handleResetConstants,
  handleEvolutionReset
)
