import React from 'react'
import { Link } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

export const Home = () => {
  return (
    <section className="welcome-msg">
      <ul>
        <Link className="welcome-link" to='/search'>{icon.searchIcon}Search for Words</Link>
        <Link className="welcome-link" to='/flashcards'>{icon.cardIcon}Make flashcards to practice</Link>
      </ul>
    </section>
  )
}
