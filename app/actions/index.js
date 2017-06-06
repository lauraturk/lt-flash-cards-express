
import { languagesFetch } from '../fetchHelpers/languagesFetch'
import { translationFetch } from '../fetchHelpers/translationFetch'
import { definitionsFetch } from '../fetchHelpers/definitionsFetch'
import { googleVisionFetch } from '../fetchHelpers/googleVisionFetch'
import { oedScrubber } from '../fetchHelpers/oedScrubber'
import { visionScrubber } from '../fetchHelpers/visionScrubber'
import { cardMaker } from '../fetchHelpers/cardMaker'

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
      // cardObject = cardMaker(inputWord, targetLanguage, responseObject)
      return dispatch(createCard(cardMaker(inputWord, targetLanguage, responseObject)))
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
    return sourceLang === targetLanguage ? definitionsFetch(inputWord) : definitionsFetch(translatedWord)
    })
    .then(response => {
      return dispatch(createCard(cardMaker(inputWord, targetLanguage, response)))
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

export const createCard = (cardObject) => {
  const { frontCard, detectedSourceLanguage, backCard, targetLanguage, id } = cardObject
  return {
    type: 'CREATE_CARD',
    frontCard,
    detectedSourceLanguage,
    backCard,
    targetLanguage,
    id
  }
}

export const cancelCard = () => {
  return {
    type: 'CANCEL_CARD',
  }
}

export const addCard = (deckName, currentDeck, currentCard) => {
  return {
    type: 'ADD_CARD',
    deckName,
    currentDeck,
    currentCard
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

export const showDeck = (deckName, currentDeck) => {
  return {
    type: 'SHOW_DECK',
    deckName,
    currentDeck
  }
}

export const hideDeck = () => {
  return {
    type: 'HIDE_DECK',
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
