import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import ControlsContainer from '../../containers/ControlsContainer'

export class CardDeck extends Component {
  constructor(props){
    super(props)
  }

  componentWillUnmount() {
    this.props.hideDeck()
  }

  chooseDeck (deckName) {
    const { currentDeck, showDeck, deckControl, nextCard } = this.props
    let tempDeckControl = Object.assign({}, deckControl, {matchedDeck: deckName})

    showDeck(deckName, currentDeck)
    nextCard(tempDeckControl, currentDeck)
  }

  showCard () {
    const { cardControl, deckControl } = this.props
    let $chosenCard = null
    if(deckControl.showDeck) {
      $chosenCard = (
        <section>
          <Card currentCard={cardControl.card} cardControl={cardControl} deckControl={deckControl} />
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
    return (<p className="deck-counter">{currentDeck[chosenDeck].length}</p>)
  }

  render() {
    const { currentDeck } = this.props

    const deckNames = Object.keys(currentDeck).map((deck, index) => {
      return (
        <nav className="deck-list">
          <div key={index} onClick={(e) => this.chooseDeck(e.target.innerText)}>
            <h2 className="deck-name">{deck}</h2>
          </div>
          {this.cardCounter(deck)}
        </nav>
      )
    })

    return (
      <section className="deck-list-wrapper">
        {deckNames}
        {this.showCard()}
      </section>
    )
  }
}
