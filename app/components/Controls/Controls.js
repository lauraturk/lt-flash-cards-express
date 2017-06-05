import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

export const Controls = (props) => {
  const { showAnswer, nextCard, deck, deckControl } = props



  return (
    <section className="controls-wrapper">
      <button className="show-answer" onClick={() => showAnswer()}>SHOW ANSWER</button>
      <button className="next" onClick={() => nextCard(deckControl, deck)}>SHUFFLE</button>
    </section>
  )
}
