import React from 'react'
// import { Route, Link, NavLink } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'
import { CardBack } from '../CardBack/CardBack'

export const Card = (props) => {
  const { currentCard, cancelCard, cardControl, deckControl, showMore } = props

  const showAnswer = () => {
    if(!deckControl.showDeck) {
      return (
        <CardBack currentCard={currentCard} cardControl={cardControl} showMore={showMore} />
      )
    }

    if(!cardControl.cardBackHidden) {
      return (
        <CardBack currentCard={currentCard} cardControl={cardControl} showMore={showMore} />
      )
    }
  }

  return (
    <div className="card">
      <div>{currentCard.detectedSourceLanguage}</div>
      <div className="card-info word-info">{currentCard.frontCard}</div>
      {showAnswer()}
      <div>{currentCard.targetLanguage}</div>
      <button onClick={() => cancelCard()}>{icon.cancelIcon}</button>
    </div>
  )
}
