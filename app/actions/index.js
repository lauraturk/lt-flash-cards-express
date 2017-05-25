// import { addCard } from './card-actions'
// import { loadLanguageList, addLanguages } from './settings-actions'
//
// export default {
//   loadLanguageList,
//   addCard,
//   addLanguages
// }

import  { languagesFetch } from '../fetchHelpers/languagesFetch'

export const loadLanguageList = () => {
  return (dispatch) => {
    return languagesFetch()
    .then(responseObject => {
      return dispatch(addLanguages(responseObject.data.languages))
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
