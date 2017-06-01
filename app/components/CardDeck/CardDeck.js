import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import ControlsContainer from '../../containers/ControlsContainer'
// import CardContainer from '../../containers/CardContainer'


export class CardDeck extends Component {
  constructor(props){
    super(props)
  }

  componentShouldUpdate () {

  }

  chooseDeck (deckName) {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    const matchedDeck = Object.keys(this.currentDeck).find(deck => {return deck === deckName})
    showDeck(matchedDeck)
  }

  cardRandomizer (min, max) {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  ////click on deck -deckControl.showDeck = true show deck
  /// click on showAnswer

  makeRandomCard () {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    return currentDeck[deckControl.matchedDeck][this.cardRandomizer(0, currentDeck[deckControl.matchedDeck].length)]
  }

  showCard () {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    let $chosenCard = null

    if(deckControl.showDeck) {
      $chosenCard = (
        <section>
          <Card currentCard={this.makeRandomCard()} controlState={controlState} deckControl={deckControl} cancelCard={deleteCard} />
          <ControlsContainer />
        </section>
      )
    }
    return $chosenCard
  }


  render() {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props

    const deckNames = Object.keys(currentDeck).map((deck, index) => {
      return (
        <section key={index} className="deckList" onClick={(e) => this.chooseDeck(e.target.innerText)}>
          {deck}
        </section>
      )
    })

    return (
      <div>
        {deckNames}
        {this.showCard()}
      </div>
    )
  }
}
