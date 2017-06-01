import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
// import { CardDeck } from '../CardDeck/CardDeck'

export const Card = (props) => {
  const { currentCard, cancelCard, controlState} = props
  console.log(controlState);

  return (
    <div className="card">
      <div>{currentCard.frontCard}</div>
      {showAnswer(controlState, currentCard.backCard)}
      <button onClick={() => cancelCard()}>Cancel</button>

    </div>
  )
}

const showAnswer = (control, answerInfo) => {
  let $answer = null
  if(!control.showDeck){
    $answer = (<div>{answerInfo}</div>)
  }
  
  if(!control.cardBackHidden){
    $answer = (<div>{answerInfo}</div>)
  }
  return $answer
}
