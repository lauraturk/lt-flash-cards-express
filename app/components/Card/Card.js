import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

export const Card = (props) => {
  const { currentCard, cancelCard, controlState, deckControl } = props

  const showAnswer = (control, answerInfo) => {
    let $answer = null

    if(!deckControl.showDeck){
      $answer = (<div className="card-info">{answerInfo}</div>)
    }

    if(!control.cardBackHidden){
      $answer = (<div className="card-info">{answerInfo}</div>)
    }
    return $answer
  }

  return (
    <div className="card">
      <div className="card-info">{currentCard.frontCard}</div>
      {showAnswer(controlState, currentCard.backCard)}
      <button onClick={() => cancelCard()}>{icon.cancelIcon}</button>
    </div>
  )
}
