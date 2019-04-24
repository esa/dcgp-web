/* state structure
{
  isAdvancedMode: bool,
  isMenuOpen: Bool,
}
*/

import { combineReducers } from 'redux'
import * as actions from './actions'

function isAdvancedMode(state = false, action) {
  const { type, payload } = action

  switch (type) {
    case actions.TOGGLE_ADVANCED_MODE:
      return !state
    case actions.SET_ADVANCED_MODE:
      return payload
    default:
      return state
  }
}

function isMenuOpen(state = false, action) {
  const { type, payload } = action

  switch (type) {
    case actions.TOGGLE_MENU_VISBILITY:
      return !state
    case actions.SET_MENU_VISIBILITY:
      return payload
    default:
      return state
  }
}

export default combineReducers({
  isAdvancedMode,
  isMenuOpen,
})
