/*
{
  isAboutOpen: Bool,
}
*/
import { combineReducers } from "redux";
import * as actions from "./actions";

function isAboutOpen(state = false, action) {
  const { type } = action;

  switch (type) {
    case actions.TOGGLE_ABOUT:
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  isAboutOpen,
});
