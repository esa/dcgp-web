// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = '[settings] '

export const SET_SEED = prefix + 'SET_SEED'
export const TOGGLE_KERNEL = prefix + 'TOGGLE_KERNEL'

export const kernelNamesById = {
  sum: 'addition',
  diff: 'subtraction',
  mul: 'multiplication',
  div: 'division',
  sin: 'sine',
  cos: 'cosine',
  sqrt: 'square root',
  log: 'logarithm',
  exp: 'exponential',
  gaussian: 'gaussian',
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
  rows: {
    label: 'rows',
    min: 1,
    max: 10,
  },
  columns: {
    label: 'columns',
    min: 1,
    max: 100,
  },
  arity: {
    label: 'arity',
    min: 2,
    max: 5,
  },
  levelsBack: {
    label: 'levels back',
    min: 1,
    max: 101,
  },
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
export const CHANGE_PARAMETER = prefix + 'CHANGE_PARAMETER'

export const changeParameter = (parameterId, value) => ({
  type: CHANGE_PARAMETER,
  payload: {
    parameterId,
    value,
  },
})

export const SET_MU = prefix + 'SET_MU'
export const SET_LAMBDA = prefix + 'SET_LAMBDA'

export const setMu = mu => ({
  type: SET_MU,
  payload: mu,
})

export const setLambda = mu => ({
  type: SET_LAMBDA,
  payload: mu,
})

// name of the function exported by dcgp.js
export const algorithmsById = {
  muPlusLambda: {
    label: 'mu plus lambda',
    maxSteps: 10,
    parameters: {
      mu: {
        label: 'mu',
        action: setMu,
        min: 1,
        max: 10,
      },
      lambda: {
        label: 'lambda',
        action: setLambda,
        min: 1,
        max: 10,
      },
    },
  },
  gradientDescent: {
    label: 'gradient descent',
    maxSteps: 10,
  },
}

export const setAlgorithm = algorithmId => ({
  type: SET_ALGORITHM,
  payload: algorithmId,
})

export const REQUEST_ADD_CONSTANT = prefix + 'REQUEST_ADD_CONSTANT'
export const REQUEST_RESET_CONSTANTS = prefix + 'REQUEST_RESET_CONSTANTS'
export const ADD_CONSTANT = prefix + 'ADD_CONSTANT'
export const SET_CONSTANT = prefix + 'SET_CONSTANT'
export const RESET_CONSTANTS = prefix + 'RESET_CONSTANTS'
export const REMOVE_CONSTANT = prefix + 'REMOVE_CONSTANT'
export const CHANGE_CONSTANT = prefix + 'CHANGE_CONSTANT'
export const MAX_CONSTANTS = 10

export const requestAddConstant = () => ({
  type: REQUEST_ADD_CONSTANT,
})

export const addConstant = constant => ({
  type: ADD_CONSTANT,
  payload: constant,
})

export const requestResetConstants = () => ({
  type: REQUEST_RESET_CONSTANTS,
})

export const setConstants = constants => ({
  type: SET_CONSTANT,
  payload: constants,
})

export const removeConstant = index => ({
  type: REMOVE_CONSTANT,
  payload: index,
})

export const changeConstant = (index, value) => ({
  type: CHANGE_CONSTANT,
  payload: {
    index,
    value,
  },
})
