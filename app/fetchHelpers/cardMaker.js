const randomId = require('random-id')
import { store } from '../index'
import { oedScrubber } from './oedScrubber'

export const cardMaker = (inputWord, targetLanguage, response) => {

  return {
    frontCard: inputWord.q,
    detectedSourceLanguage: !response.metadata ? languageMatcher(response.data.translations[0].detectedSourceLanguage) : languageMatcher(response.results[0].language),
    backCard: !response.metadata ? response.data.translations[0].translatedText : oedScrubber(response),
    targetLanguage: languageMatcher(targetLanguage.target),
    id: randomId(3)
  }
}

export const languageMatcher = (languageInitials) => {
  const languageObj = store.getState().languages.find((language) => {
    console.log(language.language, languageInitials);
    return languageInitials.includes(language.language)
  })
  return languageObj.name
}
