const randomId = require('random-id')

import { languagesFetch } from '../fetchHelpers/languagesFetch'
import { translationFetch } from '../fetchHelpers/translationFetch'
import { definitionsFetch } from '../fetchHelpers/definitionsFetch'
import { googleVisionFetch } from '../fetchHelpers/googleVisionFetch'
import { oedScrubber } from '../fetchHelpers/oedScrubber'
import { visionScrubber } from '../fetchHelpers/visionScrubber'

export const loadLanguageList = () => {
  return (dispatch) => {
    return languagesFetch()
    .then(responseObject => {
      return dispatch(addLanguages(responseObject.data.languages))
    })
    .catch(error => console.log(error, 'failed in actions'))
  }
}

export const translateWord = (inputWord, targetLanguage) => {
  return (dispatch) => {
    return translationFetch(inputWord, targetLanguage)
    .then(responseObject => {
      return dispatch(createCard(inputWord.q, responseObject.data.translations[0].translatedText))
    })
    .catch(error => console.log(error, 'failed in actions'))
  }
}

export const defineWord = (inputWord, targetLanguage) => {
  return (dispatch) => {
    return translationFetch(inputWord, targetLanguage)
    .then(responseObject => {
    let translatedWord = responseObject.data.translations[0].translatedText
    let sourceLang = responseObject.data.translations[0].detectedSourceLanguage
    console.log(responseObject)
    return sourceLang === targetLanguage ? definitionsFetch(inputWord) : definitionsFetch(translatedWord)
      // return definitionsFetch(translatedWord)
    })
    .then(responseObject => {
      return dispatch(createCard(responseObject.results[0].id, oedScrubber(responseObject)))
    })
    .catch(error => console.log(error, 'failed in actions'))
  }
}

export const findWords = (stringImage) => {
  return (dispatch) => {
    return googleVisionFetch(stringImage)
    .then(responseObject => {
      return dispatch(addFoundWords(visionScrubber(responseObject)))
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

export const createCard = (inputWord, translatedWord) => {
  return {
    type: 'CREATE_CARD',
    inputWord,
    translatedWord,
    id: randomId(3)
  }
}

export const cancelCard = () => {
  return {
    type: 'CANCEL_CARD',
  }
}

export const addCard = (deckName) => {
  return {
    type: 'ADD_CARD',
    deckName,
  }
}

export const addFoundWords = (imageWords) => {
  return {
    type: 'ADD_WORDS',
    imageWords
  }
}

export const clearWords = () => {
  return {
    type: 'CLEAR_WORDS'
  }
}

export const showDeck = (deckName) => {
  return {
    type: 'SHOW_DECK',
    deckName
  }
}

export const showAnswer = () => {
  return {
    type: 'SHOW_ANSWER'
  }
}

export const nextCard = (deckControl, deck) => {
  return {
    type: 'NEXT_CARD',
    deckControl,
    deck
  }
}
