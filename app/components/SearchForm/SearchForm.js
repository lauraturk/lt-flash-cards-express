import React, { Component } from 'react'
// import { Route, Link, NavLink } from 'react-router-dom'
import SettingsFormContainer from '../../containers/SettingsFormContainer'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: '',
      deck: ''
    }
  }

  componentDidMount() {
    this.props.populateLanguages()
  }

  handleChange(e) {
    this.setState({q: e.target.value})
  }

  handleDeckChange(e) {
    this.setState({deck: e.target.value})
  }

  handleClick() {
    this.props.createTranslationCard(this.state, this.props.targetLanguage)
  }

  createDeck() {
    const { currentDeck, currentCard } = this.props
    let match = Object.keys(currentDeck).find(key => key === this.state.deck)
    return !match ? {[this.state.deck]: [currentCard]} : currentDeck[this.state.deck].push(currentCard)
  }

  render() {
    return (
      <div className="search-tools-wrapper">
        <SettingsFormContainer />
        <input type="text" value={this.state.q} onChange={(e) => this.handleChange(e)}></input>
        <input type="submit"
               onClick={(e) => {
                        e.preventDefault
                        return this.handleClick(e)}}></input>
        <div className="deck-tools">
          <label>Add to battle deck:</label>
          <input type="text"
                 value={this.state.deck}
                 onChange={(e) => this.handleDeckChange(e)}></input>
          <button onClick={() => this.props.addCard(this.createDeck())}></button>
        </div>
      </div>
    )
  }
}
