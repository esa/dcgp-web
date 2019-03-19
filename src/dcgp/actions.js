// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = '[dcgp] '

export const SET_SEED = prefix + 'SET_SEED'
export const TOGGLE_KERNEL = prefix + 'TOGGLE_KERNEL'

export const kernelNamesById = {
  sum: 'addition',
  diff: 'subtraction',
  mul: 'multiplication',
  pdiv: 'divide',
  sin: 'sine',
  cos: 'cosine',
  log: 'logarithm',
  exp: 'exponential',
}

export const setSeed = seed => ({
  type: SET_SEED,
  payload: seed,
})

export const toggleKernel = kernelId => ({
  type: TOGGLE_KERNEL,
  payload: kernelId,
})

export const NETWORK_CHANGE = prefix + 'NETWORK_CHANGE'
export const SET_ROWS = prefix + 'SET_ROWS'
export const SET_COLUMNS = prefix + 'SET_COLUMNS'
export const SET_ARITY = prefix + 'SET_ARITY'
export const SET_LEVELS_BACK = prefix + 'SET_LEVELS_BACK'

export const networkSettingsById = {
  rows: 'rows',
  columns: 'columns',
  arity: 'arity',
  levelsBack: 'levels back',
}

export const setRows = rows => ({
  type: SET_ROWS,
  payload: rows,
})

export const setColumns = columns => ({
  type: SET_COLUMNS,
  payload: columns,
})

export const setArity = arity => ({
  type: SET_ARITY,
  payload: arity,
})

export const setLevelsBack = levelsBack => ({
  type: SET_LEVELS_BACK,
  payload: levelsBack,
})

export const setNetworkSetting = (settingId, value) => ({
  type: NETWORK_CHANGE,
  payload: {
    settingId,
    value,
  },
})

export const SET_ALGORITHM = prefix + 'SET_ALGORITHM'
// name of the function exported by dcgp.js
export const ONE_PLUS_LAMBDA = 'onePlusLambda'

export const setAlgorithm = algorithmId => ({
  type: SET_ALGORITHM,
  payload: algorithmId,
})

export const SET_DCGP_INSTANCE = prefix + 'SET_DCGP_INSTANCE'

export const setDcgpInstance = instance => ({
  type: SET_DCGP_INSTANCE,
  payload: instance,
})

export const WORKER_MESSAGE_IN = prefix + 'WORKER_MESSAGE_IN'
export const WORKER_MESSAGE_OUT = prefix + 'WORKER_MESSAGE_OUT'

export const sendWorkerMessage = action => ({
  type: WORKER_MESSAGE_OUT,
  payload: action,
})

export const START_EVOLUTION = prefix + 'START_EVOLUTION'
export const PAUSE_EVOLUTION = prefix + 'PAUSE_EVOLUTION'
export const RESET_EVOLUTION = prefix + 'RESET_EVOLUTION'
export const INITIAL_EVOLUTION = prefix + 'INITIAL_EVOLUTION'
export const LOSS_THRESHOLD = 1e-14
export const EVOLUTION_PROGRESS = prefix + 'EVOLUTION_PROGRESS'

export const setInitialEvolution = resultObj => ({
  type: INITIAL_EVOLUTION,
  payload: resultObj,
})

export const startEvolution = () => ({
  type: START_EVOLUTION,
})

export const pauseEvolution = () => ({
  type: PAUSE_EVOLUTION,
})

export const resetEvolution = () => ({
  type: RESET_EVOLUTION,
})

export const evolutionProgress = resultObj => ({
  type: EVOLUTION_PROGRESS,
  payload: resultObj,
})
