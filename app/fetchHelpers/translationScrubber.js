const randomId = require('random-id')

export const translationScrubber = (inputWord, targetLanguage, response) => {
  console.log(inputWord, targetLanguage, response)
  return {
    frontCard: inputWord.q,
    detectedSourceLanguage: response.data.translations[0].detectedSourceLanguage,
    backCard: response.data.translations[0].translatedText,
    targetLanguage: targetLanguage.target,
    id: randomId(3)
  }
  /// {id: frontCard: backCard: detectedSourceLanguage: targetLanguage: }

}
