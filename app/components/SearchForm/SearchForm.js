import React, { Component } from 'react'
import SettingsFormContainer from '../../containers/SettingsFormContainer'
import CardContainer from '../../containers/CardContainer'
import ImageUploadContainer from '../../containers/ImageUploadContainer'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: '',
      deck: ''
    }
  }

  componentDidMount() {
  }

  handleChange(e, stateInfo) {
    this.setState({[stateInfo]: e.target.value})
  }

  handleClick(type) {
    const { createTranslationCard, createDefinitionCard, targetLanguage } = this.props
    type === 'translation' ? createTranslationCard(this.state, targetLanguage) : createDefinitionCard(this.state.q)
  }

  createDeck() {
    const { currentDeck, currentCard } = this.props
    let match = Object.keys(currentDeck).find(key => key === this.state.deck)
    return !match ? {[this.state.deck]: [currentCard]} : currentDeck[this.state.deck].push(currentCard)
  }

  showDefinitionOption () {
    let $definitionButton = null

    if(this.props.targetLanguage.target === 'es'){
      $definitionButton = (<button onClick={() => {return this.handleClick('definition')}}>Subete de nivel</button>)
    }

    return $definitionButton
  }

  render() {
    return (
      <div className="search-tools-wrapper">

        <SettingsFormContainer />

        <input type="text"
               value={this.state.q}
               onChange={(e) => this.handleChange(e, 'q')}></input>
        <input type="submit"
               onClick={(e) => {
                        e.preventDefault
                        return this.handleClick('translation')}}></input>
        {this.showDefinitionOption()}


        <ImageUploadContainer />

        <div className="deck-tools">
          <label>Add to battle deck:</label>
          <input type="text"
                 value={this.state.deck}
                 onChange={(e) => this.handleChange(e, 'deck')}></input>
          <button onClick={() => this.props.addCard(this.createDeck())}>Add Card</button>
        </div>
        <CardContainer />

      </div>
    )
  }
}
