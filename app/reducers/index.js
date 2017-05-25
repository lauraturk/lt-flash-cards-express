import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { languages } from './settings-reducer.js'


export const rootReducer = combineReducers({
  languages,
  router: routerReducer
})
