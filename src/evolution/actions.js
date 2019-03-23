// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = '[evolution] '

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
