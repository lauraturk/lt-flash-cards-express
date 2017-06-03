import React from 'react'
import * as icon from '../../assets/svg-icons'

export const SettingsForm = (props) => {
  const { languages, selectTargetLanguage, targetLanguage } = props

  const languageOptions = languages.map((language) => {
    return (
      <option key={language.language}>{language.name}</option>
    )
  })

  const handleLanguageChange = ( languageChoice ) => {
    const selectedLanguage = languages.find((lang) => {
      return lang.name === languageChoice
    })
    selectTargetLanguage(selectedLanguage.language)
  }

  const showTargetLanguage = () => {
    if (languages.length){
      const showLanguage = languages.find(language => {
        return language.language === targetLanguage.target
      })
      return (<div className="targetLanguage">{icon.selectIcon}{showLanguage.name}</div>)
    }
  }


  return (
    <div className="settings-form-wrapper">
      {showTargetLanguage()}
      <select className="language-menu" name="To:" onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions}
      </select>
    </div>
  )
}
