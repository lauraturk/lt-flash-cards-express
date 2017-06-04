import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import ControlsContainer from '../../containers/ControlsContainer'

export class CardDeck extends Component {
  constructor(props){
    super(props)
  }

  chooseDeck (deckName) {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    const matchedDeck = Object.keys(currentDeck).find(deck => {return deck === deckName})
    deckControl.matchedDeck = matchedDeck;

    showDeck(matchedDeck)
    nextCard(deckControl, currentDeck)
  }

  showCard () {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    let $chosenCard = null
    if(deckControl.showDeck) {
      $chosenCard = (
        <section>
          <Card currentCard={controlState.card} controlState={controlState} deckControl={deckControl} cancelCard={deleteCard} />
          <ControlsContainer />
        </section>
      )
    }
    return $chosenCard
  }

  cardCounter (deckName) {
    const { currentDeck } = this.props

    const chosenDeck = Object.keys(currentDeck).find((deck) =>{
      return deck === deckName
    })
    return (<span className="deck-counter">{currentDeck[chosenDeck].length}</span>)
  }

  render() {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props

    const deckNames = Object.keys(currentDeck).map((deck, index) => {
      return (
        <section>
          <div key={index} className="deckList" onClick={(e) => this.chooseDeck(e.target.innerText)}>
            {deck}
          </div>
          {this.cardCounter(deck)}
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
