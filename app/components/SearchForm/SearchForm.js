import React, { Component } from 'react'
// import { Route, Link, NavLink } from 'react-router-dom'
import SettingsFormContainer from '../../containers/SettingsFormContainer'
import {translationFetch} from '../../fetchHelpers/translationFetch'
import {definitionsFetch} from '../../fetchHelpers/definitionsFetch'
import {languagesFetch} from '../../fetchHelpers/languagesFetch'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: '',
      // target: 'en'
    }

  }

  componentDidMount() {
    this.props.populateLanguages()
  }

  handleChange(e) {
    this.setState({q: e.target.value})
  }

  handleClick() {
    // console.log(Object.assign({}, this.state, this.props.targetLanguage))
    translationFetch(this.state, this.props.targetLanguage)
    // definitionsFetch(this.state.q)
  }

  render() {
    return (
      <div className="search-form-wrapper">
        <SettingsFormContainer />
        <input type="text" value={this.state.q} onChange={(e) => this.handleChange(e)}></input>
        <input type="submit"
               onClick={(e) => {
                        e.preventDefault
                        return this.handleClick(e)}}></input>
      </div>
    )
  }
}
