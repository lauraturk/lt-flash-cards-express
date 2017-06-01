import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import ControlsContainer from '../../containers/ControlsContainer'
// import CardContainer from '../../containers/CardContainer'


export const CardDeck = (props) => {
  const { currentDeck, deleteCard, controlState, showDeck, deckControl, nextCard } = props

  const chooseDeck = (deckName) => {
    const matchedDeck = Object.keys(currentDeck).find(deck => {return deck === deckName})
    showDeck(matchedDeck)
  }

  const cardRandomizer = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  ////click on deck -deckControl.showDeck = true show deck
  /// click on showAnswer

  const makeRandomCard = () => {
    return currentDeck[deckControl.matchedDeck][cardRandomizer(0, currentDeck[deckControl.matchedDeck].length)]
  }

  const showCard = () => {
    let $chosenCard = null

    if(deckControl.showDeck) {
      $chosenCard = (
        <section>
          <Card currentCard={makeRandomCard()} controlState={controlState} deckControl={deckControl} cancelCard={deleteCard} />
          <ControlsContainer />
        </section>
      )
    }
    return $chosenCard
  }

    const deckNames = Object.keys(currentDeck).map((deck, index) => {
      return (
        <section key={index} className="deckList" onClick={(e) => chooseDeck(e.target.innerText)}>
          {deck}
        </section>
      )
    })

    return (
      <div>
        {deckNames}
        {showCard()}
      </div>
    )
  }
