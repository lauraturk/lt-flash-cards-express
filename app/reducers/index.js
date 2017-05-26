import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { languages, targetLanguage } from './settings-reducer.js'
import { card } from './card-reducer.js'


export const rootReducer = combineReducers({
  card,
  languages,
  targetLanguage,
  router: routerReducer
})
