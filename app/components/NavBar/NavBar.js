import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

const NavBar = (props) => {
  const { deck } = props
  console.log();
  return (
    <nav className="nav-bar">
      <NavLink to='/search' activeClassName='selected' className='icon'>{icon.searchIcon}</NavLink>
      <NavLink to='/flashcards' activeClassName='selected' className='icon'><span className="deck-counter">{Object.keys(deck).length}</span>{icon.cardIcon}</NavLink>
    </nav>
  )
}

export default NavBar
