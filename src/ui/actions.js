// the namespace for the actions in this file
// prevents actions from being declared multiple times
const prefix = '[ui] '

export const TOGGLE_MENU_VISBILITY = prefix + 'TOGGLE_MENU_VISBILITY'
export const SET_MENU_VISIBILITY = prefix + 'SET_MENU_VISIBILITY'

export const toggleMenuVisibility = () => ({
  type: TOGGLE_MENU_VISBILITY,
})

export const TOGGLE_ADVANCED_MODE = prefix + 'TOGGLE_ADVANCED_MODE'
export const SET_ADVANCED_MODE = prefix + 'SET_ADVANCED_MODE'

export const toggleAdvancedMode = () => ({
  type: TOGGLE_ADVANCED_MODE,
})
