import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

export const Card = (props) => {
  const { currentCard, cancelCard, cardControl, deckControl } = props

  const showAnswer = (answerInfo) => {
    // let $answer = null

    if(!deckControl.showDeck){
      return (<div className="card-info answer-info">{answerInfo}</div>)
    }

    if(!cardControl.cardBackHidden){
      return (<div className="card-info answer-info">{answerInfo}</div>)
    }
    return null
  }

  return (
    <div className="card">
      <div className="card-info word-info">{currentCard.frontCard}</div>
      {showAnswer(currentCard.backCard)}
      <button onClick={() => cancelCard()}>{icon.cancelIcon}</button>
    </div>
  )
}
