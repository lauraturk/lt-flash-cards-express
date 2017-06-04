import React, { Component } from 'react'
import SettingsFormContainer from '../../containers/SettingsFormContainer'
import CardContainer from '../../containers/CardContainer'
import ImageUploadContainer from '../../containers/ImageUploadContainer'
import * as icon from '../../assets/svg-icons'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: '',
      deck: ''
    }
  }

  handleChange(e, stateInfo) {
    this.setState({[stateInfo]: e.target.value})
  }

  handleClick(type) {
    const { createTranslationCard, createDefinitionCard, targetLanguage } = this.props
    type === 'translation' ? createTranslationCard(this.state, targetLanguage) : createDefinitionCard(this.state, targetLanguage)
    this.clearState('q')
  }

  createDeck() {
    const { currentDeck, currentCard } = this.props
    let match = Object.keys(currentDeck).find(key => key === this.state.deck)
    return !match ? {[this.state.deck]: [currentCard]} : currentDeck[this.state.deck].push(currentCard)
    this.clearState('deck')
  }

  clearState(type) {
    this.setState({
      [type]: ''
    })
  }

  showDefinitionOption () {
    let $definitionButton = null

    if(this.props.targetLanguage.target === 'es'){
      $definitionButton = (<button onClick={() => {return this.handleClick('definition')}}>Subete de nivel</button>)
    }

    return $definitionButton
  }

  render() {
    const {currentDeck} = this.props
    console.log(currentDeck)

    return (
      <div className="search-tools-wrapper">

        <div className="search-tools">
          <label className="textsearch-input">
            {icon.pencilIcon}
            <input type="text"
                   value={this.state.q}
                   onChange={(e) => this.handleChange(e, 'q')} />
            <button type="submit"
                    onClick={(e) => {
                    return this.handleClick('translation')}}>
              {icon.searchIcon}
              <span className="directions-display">FIND WORD</span>
            </button>
                    {this.showDefinitionOption()}
          </label>
          <ImageUploadContainer />
        </div>

        <SettingsFormContainer />

        <CardContainer />
        <div className="deck-tools">
          <label>CHOOSE A DECK
          <input list="deck"
                 type="text"
                 value={this.state.deck}
                 onChange={(e) => this.handleChange(e, 'deck')}/>
          </label>
          <datalist id="deck">
            {Object.keys(currentDeck).map((deck, index) => {
              return (<option key={index} value={deck} />)
              })
            }
          </datalist>
          <button onClick={() => this.props.addCard(this.createDeck())}>
            {icon.addIcon}
            <span className="directions-display">SAVE YOUR CARD</span>
          </button>
        </div>

      </div>
    )
  }
}
