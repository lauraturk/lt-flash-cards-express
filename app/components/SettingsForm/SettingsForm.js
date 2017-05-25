import React from 'react'

export const SettingsForm = (props) => {
  const { languages, selectTargetLanguage } = props
  console.log(selectTargetLanguage)

  const languageOptions = languages.map((language) => {
    return (
      <option>{language.name}</option>
    )
  })

  const handleLanguageChange = ( languageChoice ) => {
    const selectedLanguage = languages.find((lang) => {
      return lang.name === languageChoice
    })
    selectTargetLanguage(selectedLanguage.language)
  }

  // <select name="Translate from:" onChange={(e) => handleLanguageChange(e.target.value)}>
  //   {languageOptions}
  // </select>

  return (
    <div className="settings-form-wrapper">
      <select name="To:" onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions}
      </select>
    </div>
  )
}
