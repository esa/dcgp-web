import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import evolution from './evolution/reducers'
import settings from './settings/reducers'
import datasets from './dataset/reducers'

import evolutionEpic from './evolution/epics'
import settingsEpic from './settings/epics'

export const rootReducer = combineReducers({
  evolution,
  settings,
  datasets,
})

export const rootEpic = combineEpics(settingsEpic, evolutionEpic)
