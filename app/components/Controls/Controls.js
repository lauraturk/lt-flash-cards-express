import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

export const Controls = (props) => {
  const { showAnswer, nextCard } = props
  return (
    <section className="controls-wrapper">
      <button className="back">&lt;</button>
      <button className="show-answer" onClick={() => showAnswer()}>show answer</button>
      <button className="next" onClick={() => nextCard()}>&gt;</button>
    </section>
  )
}
