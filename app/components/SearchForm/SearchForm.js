import React, { Component } from 'react'
// import { Route, Link, NavLink } from 'react-router-dom'
import { SettingsForm } from '../SettingsForm/SettingsForm'
import fetchHelper from '../../fetchHelper'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: 'manzana',
      target: 'en'
      // target: 'en'
    }
  }

  componentDidMount() {
    console.log('mounted?')

      fetchHelper.translationFetch(this.state)
      fetchHelper.languagesFetch()
  }

  handleChange() {
    this.setState({q: e.target.value})
  }

  render() {
    return (
      <div className="search-form-wrapper">
        <SettingsForm />
        <input type="text" value={this.state.q} onChange={(e) => this.handleChange(e)}></input>
      </div>
    )
  }
}
