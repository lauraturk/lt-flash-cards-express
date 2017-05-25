import React from 'react'

export const SettingsForm = (props) => {
  const { languages } = props

  const languageOptions = languages.map((language) => {
    return (
      <option>{language.name}</option>
    )
  })

  const handleLanguageChange = ( languageChoice ) => {
    languages.find((lang) => {
      return lang.name === languageChoice
    })
  }


  return (
    <div className="settings-form-wrapper">
      <select name="Translate from:" onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions}
      </select>
      <select name="To:" onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions}
      </select>
    </div>
  )
}
