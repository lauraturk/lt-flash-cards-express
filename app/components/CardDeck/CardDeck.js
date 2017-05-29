import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { Card } from '../Card/Card'
import { Controls } from '../Controls/Controls'


export const CardDeck = (props) => {
  const { currentDeck } = props

  const deckNames = Object.keys(currentDeck).map((deck, index) => {
    return (
      <section key={index} className="card" onClick={(e) => chooseDeck(e.target.innerText)}>
        {deck}
      </section>
    )
  })

  const chooseDeck = (deckName) => {
    let matchedDeck = Object.keys(currentDeck).find(deck => {return deck === deckName})

    const showCard = currentDeck[matchedDeck].map(card => {
      return (
        <Card key={card.id} currentCard={card} />
      )
    })

  }

  return (
    <div>
      {deckNames}
      <div className='hidden'></div>
    </div>

  )
}
