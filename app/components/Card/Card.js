import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
// import { CardDeck } from '../CardDeck/CardDeck'

export const Card = (props) => {
  const { currentCard, cancelCard, controlState, deckControl } = props
    console.log(controlState,'+', deckControl);

  const showAnswer = (control, answerInfo) => {
    let $answer = null

    if(!deckControl.showDeck){
      $answer = (<div>{answerInfo}</div>)
    }

    if(!control.cardBackHidden){
      $answer = (<div>{answerInfo}</div>)
    }
    return $answer
  }

  return (
    <div className="card">
      <div>{currentCard.frontCard}</div>
      {showAnswer(controlState, currentCard.backCard)}
      <button onClick={() => cancelCard()}>Cancel</button>

    </div>
  )
}
