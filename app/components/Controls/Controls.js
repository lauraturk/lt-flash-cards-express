import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

export const Controls = (props) => {
  const { showAnswer, nextCard, deck, deckControl, cardControl } = props

  const showAnswerButton = cardControl.cardBackHidden ? 'SHOW ANSWER' : 'HIDE ANSWER'

  return (
    <section className="controls-wrapper">
      <button className="show-answer" onClick={() => showAnswer()}>{showAnswerButton}</button>
      <button className="next" onClick={() => nextCard(deckControl, deck)}>SHUFFLE</button>
    </section>
  )
}
