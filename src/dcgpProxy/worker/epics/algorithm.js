import { ReplaySubject } from 'rxjs'
import { map, filter, startWith } from 'rxjs/operators'

const makeAlgorithm = event$ => {
  const algorithm$ = new ReplaySubject(1)

  event$
    .pipe(
      filter(event => event.payload && event.payload.algorithm),
      map(event => event.payload.algorithm),
      startWith(null)
    )
    .subscribe(algorithm$)

  return algorithm$
}

export default makeAlgorithm
