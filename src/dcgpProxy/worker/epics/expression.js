import { ReplaySubject } from 'rxjs'
import { map, filter, scan, startWith } from 'rxjs/operators'
import { KernelSet, Expression } from 'dcgp'

/*
// looks for the following object structure
{
  payload: {
    expression: {
      kernelIds: [String],
      inputs: Number,
      outputs: Number,
      seed: Number,
      rows: Number,
      columns: Number,
      arity: Number,
      levelsBack: Number,
    }
  }
}
*/

const makeExpression = event$ => {
  const expression$ = new ReplaySubject(1)

  event$
    .pipe(
      filter(event => event.payload && event.payload.expression),
      map(event => event.payload.expression),
      map(createExpression),
      filter(expression => expression),
      scan((previous, current) => {
        if (previous) previous.destroy()
        return current
      }),
      startWith(null)
    )
    .subscribe(expression$)

  return expression$
}

export const createExpression = settings => {
  try {
    const kernelSet = new KernelSet(...settings.kernelIds)

    const expression = new Expression(
      settings.inputs,
      settings.outputs,
      settings.rows,
      settings.columns,
      settings.levelsBack,
      settings.arity,
      kernelSet,
      settings.seed
    )

    kernelSet.destroy()

    return expression
  } catch (error) {
    return null
  }
}

export default makeExpression
