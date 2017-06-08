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
      <div className="language-bar top-bar">{currentCard.detectedSourceLanguage}</div>
      <div className="word-info">{currentCard.frontCard}</div>
      {showAnswer()}
      <div className="language-bar bottom-bar">
        {currentCard.targetLanguage}
        <button className="button-submit"
                onClick={() => cancelCard()}>{icon.cancelIcon}</button>
      </div>
    </div>
  )
}
