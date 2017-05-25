import React from 'react'

export const SettingsForm = ({ }) => {
  return (
    <div className="settings-form-wrapper">
      <select name="Translate from:">
        <option>Spanish</option>
        <option>English</option>
        <option>French</option>
      </select>
      <select name="To:">
        <option>Spanish Definition</option>
        <option>English</option>
        <option>German</option>
      </select>
    </div>
  )
}
