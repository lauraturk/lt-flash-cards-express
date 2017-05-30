import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import { Controls } from '../Controls/Controls'


export default class CardDeck extends Component {
  constructor(props){
    super(props)
    this.state = {
      matchedDeck: ''
    }
  }

  chooseDeck (deckName){
    const { currentDeck, deleteCard } = this.props

    const matchedDeck = Object.keys(currentDeck).find(deck => {return deck === deckName})
    this.setState({matchedDeck})
  }

  render () {
    const { matchedDeck } = this.state

    const { currentDeck, deleteCard } = this.props

    let $chosenCardDeck = null

    if(matchedDeck) {
      $chosenCardDeck = currentDeck[matchedDeck].map(card, index => {
        console.log(card, 'in the map');
        return (
          <section>
            <Card key={card.id} currentCard={card} cancelCard={deleteCard}/>
            <Controls key={index} />
          </section>
        )
      })
    }

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
        {$chosenCardDeck}
      </div>
    )
  }

}
