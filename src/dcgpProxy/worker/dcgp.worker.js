/* eslint-env worker */
import { initialise } from 'dcgp'
import { fromEvent, merge, from, Subject, ReplaySubject, concat } from 'rxjs'
import { pluck, filter } from 'rxjs/operators'
import dcgpUrl from 'dcgp/dcgp.wasm'

import makeExpression from './epics/expression'
import makeAlgorithm from './epics/algorithm'

import handleStep from './epics/step'
import handleEvolution from './epics/evolution'
import handleLoss from './epics/loss'
import handlePrediction from './epics/prediction'
import handleEquation from './epics/equation'

const rawEvent$ = new ReplaySubject()
const event$ = new Subject()

// eslint-disable-next-line no-restricted-globals
fromEvent(self, 'message').subscribe(rawEvent$)

const initialise$ = from(initialise(dcgpUrl))

concat(initialise$, rawEvent$)
  .pipe(
    filter(event => event && event.data),
    pluck('data')
  )
  .subscribe(event$)

const expression$ = makeExpression(event$)
const algorithm$ = makeAlgorithm(event$)

const state = {
  expression$,
  algorithm$,
}

merge(
  handleStep(event$, state),
  handleEvolution(event$, state),
  handleLoss(event$, state),
  handlePrediction(event$, state),
  handleEquation(event$, state)
).subscribe({ next: event => postMessage(event) })
