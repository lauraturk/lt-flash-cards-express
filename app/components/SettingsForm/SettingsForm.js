import React from 'react'
import * as icon from '../../assets/svg-icons'

export const SettingsForm = (props) => {
  const { languages, selectTargetLanguage, targetLanguage } = props


  const handleLanguageChange = ( languageChoice ) => {
    const selectedLanguage = languages.find((lang) => {
      return lang.name === languageChoice
    })
    selectTargetLanguage(selectedLanguage.language)
  }

  const showTargetLanguage = () => {
    if(languages.length) {
      const showLanguage = languages.find(language => {
        return language.language === targetLanguage.target
      })
      return showLanguage.name
    }
  }

  const languageOptions = languages.map((language) => {
    return (
      <option key={language.language}>{language.name}</option>
    )
  })

  return (
    <div className="settings-form-wrapper">
      <p className="directions-display">TRANSLATE TO</p>
      {icon.changeIcon}
      <select className="language-menu"
              value={showTargetLanguage()}
              onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions}
      </select>
    </div>
  )
}
