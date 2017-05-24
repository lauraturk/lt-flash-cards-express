import React, { Component } from 'react'
// import { Route, Link, NavLink } from 'react-router-dom'
import { SettingsForm } from '../SettingsForm/SettingsForm'
import fetchHelper from '../../fetchHelper'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: '',
      target: 'en'
      // target: 'en'
    }
  }

  componentDidMount() {
    console.log('mounted?')


      fetchHelper.languagesFetch()
  }

  handleChange(e) {
    this.setState({q: e.target.value})
  }

  handleClick() {
    fetchHelper.translationFetch(this.state)
    fetchHelper.definitionsFetch(this.state.q)
  }

  render() {
    return (
      <div className="search-form-wrapper">
        <SettingsForm />
        <input type="text" value={this.state.q} onChange={(e) => this.handleChange(e)}></input>
        <input type="submit"
               onClick={(e) => {
                        e.preventDefault
                        return this.handleClick(e)}}></input>
      </div>
    )
  }
}
