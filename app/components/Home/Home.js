import React from 'react'
import { Link } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

export const Home = () => {
  return (
    <section className="welcome-msg">
      <ul>
        <Link className="welcome-link" to='/settings'>{icon.gearIcon}Choose A Language to Learn</Link>
        <Link className="welcome-link" to='/search'>{icon.searchIcon}Search for Words</Link>
        <Link className="welcome-link" to='/flashcards'>{icon.cardIcon}Make a flashcards to practice</Link>
      </ul>
    </section>
  )
}
