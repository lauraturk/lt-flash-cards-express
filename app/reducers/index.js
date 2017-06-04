import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { languages, targetLanguage } from './settings-reducer.js'
import { currentCard } from './card-reducer.js'
import { deck } from './carddeck-reducer.js'
import { foundWords } from './imageUpload-reducer.js'
import { cardControl } from './controls-reducer.js'
import { deckControl } from './deckcontrol-reducer.js'


export const rootReducer = combineReducers({
  deckControl,
  cardControl,
  foundWords,
  deck,
  currentCard,
  languages,
  targetLanguage,
  router: routerReducer
})
