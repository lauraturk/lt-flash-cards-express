import React from 'react'
import { Link } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

export const Home = () => {
  return (
    <section className="welcome-msg">
      <ul>
        <Link className="welcome-link" to='/search'>{icon.searchIcon}SEARCH FOR WORDS</Link>
        <Link className="welcome-link" to='/flashcards'>{icon.cardIcon}MAKE FLASHCARDS TO PRACTICE</Link>
      </ul>
    </section>
  )
}
