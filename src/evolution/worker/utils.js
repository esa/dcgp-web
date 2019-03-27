export const handleNewMessagesFirst = async (func, ...args) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(func(...args))
    }, 0)
  })

export const createExpression = (
  dcgp,
  { parameters, activeKernelIds, inputs, labels, chromosome }
) => {
  const {
    seed,
    network: { rows, columns, arity, levelsBack },
  } = parameters

  const myKernelSet = new dcgp.KernelSet(activeKernelIds)
  const myExpression = new dcgp.Expression(
    inputs[0].length,
    labels[0].length,
    rows,
    columns,
    levelsBack,
    arity,
    myKernelSet,
    seed
  )

  myKernelSet.destroy()

  if (chromosome) {
    myExpression.setChromosome(chromosome)
  }

  return myExpression
}
