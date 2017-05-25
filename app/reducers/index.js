import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { languages, targetLanguage } from './settings-reducer.js'


export const rootReducer = combineReducers({
  languages,
  targetLanguage,
  router: routerReducer
})
