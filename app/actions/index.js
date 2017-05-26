// import { addCard } from './card-actions'
// import { loadLanguageList, addLanguages } from './settings-actions'
//
// export default {
//   loadLanguageList,
//   addCard,
//   addLanguages
// }

import  { languagesFetch } from '../fetchHelpers/languagesFetch'
import {translationFetch} from '../fetchHelpers/translationFetch'
import {definitionsFetch} from '../fetchHelpers/definitionsFetch'

export const loadLanguageList = () => {
  return (dispatch) => {
    return languagesFetch()
    .then(responseObject => {
      return dispatch(addLanguages(responseObject.data.languages))
    })
  }
}

export const translateWord = (inputWord, targetLanguage) => {
  return (dispatch) => {
    return translationFetch(inputWord, targetLanguage)
    .then(responseObject => {
      return dispatch(addCard(inputWord.q, responseObject.data.translations[0].translatedText))
    })
  }
}


export const addLanguages = (languageSet) => {
  return {
    type: 'ADD_LANGUAGES',
    languageSet
  }
}

export const selectLanguage = (language) => {
  return {
    type: 'SELECT_LANGUAGE',
    language
  }
}

export const addCard = (inputWord, translatedWord) => {
  return {
    type: 'ADD_CARD',
    inputWord,
    translatedWord
  }
}
