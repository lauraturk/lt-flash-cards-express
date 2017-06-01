import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import ControlsContainer from '../../containers/ControlsContainer'
// import CardContainer from '../../containers/CardContainer'


export const CardDeck = (props) => {
  const { currentDeck, deleteCard, controlState, showDeck } = props

  const chooseDeck = (deckName) => {
    const matchedDeck = Object.keys(currentDeck).find(deck => {return deck === deckName})
    showDeck(matchedDeck)
  }

  const cardRandomizer = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  const showCard = () => {
    let $chosenCard = null

    if(controlState.showDeck) {
      let randomCard = currentDeck[controlState.matchedDeck][cardRandomizer(0, currentDeck[controlState.matchedDeck].length)]
      $chosenCard = (
        <section>
          <Card currentCard={randomCard} controlState={controlState} cancelCard={deleteCard} />
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
