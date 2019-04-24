import { combineReducers } from 'redux'
import evolution from './evolution/reducers'
import settings from './settings/reducers'
import datasets from './dataset/reducers'
import ui from './ui/reducers'

export default combineReducers({
  evolution,
  settings,
  datasets,
  ui,
})
