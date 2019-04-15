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
  rows: {
    label: 'rows',
    advanced: false,
    min: 1,
    max: 10,
  },
  columns: {
    label: 'columns',
    advanced: false,
    min: 1,
    max: 100,
  },
  arity: {
    label: 'arity',
    advanced: false,
    min: 2,
    max: 5,
  },
  levelsBack: {
    label: 'levels back',
    advanced: false,
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

// name of the function exported by dcgp.js
export const algorithmsById = {
  muPlusLambda: {
    label: 'mu plus lambda',
    maxSteps: 1000,
    settings: {
      mu: {
        label: 'mu',
        advanced: true,
        min: 1,
        max: 10,
      },
      lambda: {
        label: 'lambda',
        advanced: true,
        min: 1,
        max: 10,
      },
    },
  },
  gradientDescent: {
    label: 'gradient descent',
    maxSteps: 1000,
  },
}

export const setAlgorithm = algorithmId => ({
  type: SET_ALGORITHM,
  payload: algorithmId,
})

export const ADD_CONSTANT = prefix + 'ADD_CONSTANT'
export const SET_CONSTANT = prefix + 'SET_CONSTANT'
export const REMOVE_CONSTANT = prefix + 'REMOVE_CONSTANT'
export const CHANGE_CONSTANT = prefix + 'CHANGE_CONSTANT'
export const MAX_CONSTANTS = 10

export const addConstant = () => ({
  type: ADD_CONSTANT,
})

export const setConstant = constants => ({
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
