import { combineReducers } from 'redux'
import evolution from './evolution/reducers'
import settings from './settings/reducers'

export default combineReducers({
  evolution,
  settings,
})
