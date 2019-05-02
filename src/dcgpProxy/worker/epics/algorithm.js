import { map, filter, startWith } from 'rxjs/operators'

const makeAlgorithm = event$ =>
  event$.pipe(
    filter(event => event.payload && event.payload.algorithm),
    map(event => event.payload.algorithm),
    startWith(null)
  )

export default makeAlgorithm
