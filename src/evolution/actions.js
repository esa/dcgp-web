// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = "[evolution] ";

export const START = prefix + "START";
export const START_REQUEST = prefix + "START_REQUEST";

export const startEvolution = (payload) => ({
  type: START,
  payload,
});

export const startEvolutionRequest = () => ({
  type: START_REQUEST,
});

export const PAUSE = prefix + "PAUSE";
export const PAUSE_REQUEST = prefix + "PAUSE_REQUEST";

export const pauseEvolution = () => ({
  type: PAUSE,
});

export const pauseEvolutionRequest = () => ({
  type: PAUSE_REQUEST,
});

export const RESUME = prefix + "RESUME";
export const RESUME_REQUEST = prefix + "RESUME_REQUEST";

export const RESET = prefix + "RESET";
export const RESET_REQUEST = prefix + "RESET_REQUEST";

export const resetEvolution = () => ({
  type: RESET,
});

export const resetEvolutionRequest = () => ({
  type: RESET_REQUEST,
});

export const STEP = prefix + "STEP";
export const STEP_REQUEST = prefix + "STEP_REQUEST";

export const stepEvolution = (payload) => ({
  type: STEP,
  payload,
});

export const stepEvolutionRequest = () => ({
  type: STEP_REQUEST,
});

export const DONE = prefix + "DONE";
// export const DONE_REQUEST = prefix + 'DONE_REQUEST'

export const doneEvolution = () => ({
  type: DONE,
});

export const CONVERGED = prefix + "CONVERGED";

export const evolutionConverged = () => ({
  type: CONVERGED,
});

export const CONVERGED_RESET = prefix + "CONVERGED_RESET";

export const evolutionConvergedReset = () => ({
  type: CONVERGED_RESET,
});

export const INITIAL = prefix + "INITIAL";
export const INITIAL_REQUEST = prefix + "INITIAL_REQUEST";

export const initialEvolution = (payload) => ({
  type: INITIAL,
  payload,
});

export const initialEvolutionRequest = () => ({
  type: INITIAL_REQUEST,
});

export const PROGRESS = prefix + "PROGRESS";
export const PROGRESS_REQUEST = prefix + "PROGRESS_REQUEST";

export const evolutionProgress = (resultObj) => ({
  type: PROGRESS,
  payload: resultObj,
});

export const SET_EXPRESSION = prefix + "SET_EXPRESSION";

export const setExpression = (expression) => ({
  type: SET_EXPRESSION,
  payload: expression,
});
