import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import ControlsContainer from '../../containers/ControlsContainer'
// import CardContainer from '../../containers/CardContainer'


export class CardDeck extends Component {
  constructor(props){
    super(props)
    // this.state={
    // card: ''
    // }
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   const { controlState, deckControl } = this.props;
  //   // check that nextcard, matcheddeck, and showdeck remain the same;
  //   // && (nextProps.controlState.nextCard !== controlState.nextCard))
  //   // nextProps.deckControl.showDeck !== deckControl.showDeck) && (nextProps.controlState.nextCard !== controlState.nextCard
  //   console.log(!controlState.nextCard)
  //   return (!controlState.nextCard)
  // }

  chooseDeck (deckName) {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    const matchedDeck = Object.keys(currentDeck).find(deck => {return deck === deckName})
    deckControl.matchedDeck = matchedDeck;
    showDeck(matchedDeck)
    nextCard(deckControl, currentDeck)
  }

  // cardRandomizer (min, max) {
  //   const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
  //   min = Math.ceil(min)
  //   max = Math.floor(max)
  //   return Math.floor(Math.random() * (max - min)) + min
  // }

  ////click on deck -deckControl.showDeck = true show deck
  /// click on showAnswer

  // makeRandomCard () {
  //   const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
  //   const card = currentDeck[deckControl.matchedDeck][this.cardRandomizer(0, currentDeck[deckControl.matchedDeck].length)]
  //   return card
  // }

  showCard () {
    const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = this.props
    let $chosenCard = null
    console.log('erry day');
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
