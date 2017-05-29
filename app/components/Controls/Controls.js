import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

export const Controls = () => {
  return (
    <section className="controls-wrapper">
      <button className="back">&lt;</button>
      <button className="show-answer">show answer</button>
      <button className="next">&gt;</button>
    </section>
  )
}
