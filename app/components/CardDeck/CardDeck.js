import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import ControlsContainer from '../../containers/ControlsContainer'
// import CardContainer from '../../containers/CardContainer'


export default class CardDeck extends Component {
  constructor(props){
    super()
    this.state = {
      matchedDeck: ''
    }
    // const { currentDeck, deleteCard } = this.props
  }

  chooseDeck (deckName){
    const { currentDeck } = this.props
    const matchedDeck = Object.keys(currentDeck).find(deck => {return deck === deckName})
    this.setState({matchedDeck})
  }

  cardRandomizer (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  showCard () {
    const { matchedDeck } = this.state
    let $chosenCard = null

    if(matchedDeck) {
      const { currentDeck, deleteCard, controlState } = this.props
      console.log(controlState);
      let randomCard = currentDeck[matchedDeck][this.cardRandomizer(0, currentDeck[matchedDeck].length)]
      $chosenCard = (
        <section>
          <Card currentCard={randomCard} handleShow={controlState} cancelCard={deleteCard} />
        </section>
      )
    }
    return $chosenCard
  }

  render () {
    const { currentDeck, deleteCard } = this.props

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
        <ControlsContainer />
      </div>
    )
  }

}
