const randomId = require('random-id')
import { store } from '../index'

export const translationScrubber = (inputWord, targetLanguage, response) => {
  console.log(inputWord, targetLanguage, response)

  return {
    frontCard: inputWord.q,
    detectedSourceLanguage: languageMatcher(response.data.translations[0].detectedSourceLanguage),
    backCard: response.data.translations[0].translatedText,
    // definition: oedScubber(response)
    targetLanguage: languageMatcher(targetLanguage.target),
    id: randomId(3)
  }
  /// {id: frontCard: backCard: detectedSourceLanguage: targetLanguage: }

}

export const languageMatcher = (languageInitials) => {
  console.log(store.getState());
  const languageObj = store.getState().languages.find((language) => {
    return language.language === languageInitials
  })
  return languageObj.name
}
