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
  }
}

export const translateWord = (inputWord, targetLanguage) => {
  return (dispatch) => {
    return translationFetch(inputWord, targetLanguage)
    .then(responseObject => {
      return dispatch(createCard(inputWord.q, responseObject.data.translations[0].translatedText))
    })
  }
}

export const defineWord = (inputWord) => {
  return (dispatch) => {
    return definitionsFetch(inputWord)
    .then(responseObject => {
      return dispatch(createCard(inputWord, oedScrubber(responseObject)))
    })
    .catch(error => console.log(error, 'in actions'))
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

export const cancelCard = (card) => {
  return {
    type: 'CANCEL_CARD',
    card
  }
}

export const addCard = (deckName, card) => {
  return {
    type: 'ADD_CARD',
    deckName,
  }
}

export const deleteCard = (deckName, cardId) => {
  return {
    type: 'DELETE_CARD',
    deckName,
    cardId
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

export const nextCard = () => {
  return {
    type: 'NEXT_CARD'
  }
}

export const prevCard = () => {
  return {
    type: 'PREV_CARD'
  }
}

export const signInUser = (userId) => {
  return {
    type: 'SIGN_IN_USER',
    userId,
  }
}

export const signOutUser = () => {
  return {
    type: 'SIGN_OUT_USER'
  }
}

// export const addUserDecks = (userDecks) => {
//   return {
//     type: 'LOAD_INITIAL_FAVS',
//     userDecks
//   }
// }
