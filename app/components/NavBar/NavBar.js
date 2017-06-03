import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/settings' activeClassName='selected' className='icon'>{icon.gearIcon}</NavLink>
      <NavLink to='/search' activeClassName='selected' className='icon'>{icon.searchIcon}</NavLink>
      <NavLink to='/flashcards' activeClassName='selected' className='icon'>{icon.cardIcon}</NavLink>
    </nav>
  )
}

export default NavBar
