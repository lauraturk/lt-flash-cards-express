import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'
import * as city from '../../assets/city-icons'


const NavBar = (props) => {
  const { deck } = props

  return (
    <nav className="nav-bar">
      <div className="title-bar">
        <NavLink to='/'
                 className="title-link">
          <h1 className="app-name">FLASH LINGUA</h1>
        </NavLink>
        <div className="city-scape">
          {city.city2}{city.city3}{city.city7}{city.city5}{city.city6}{city.city8}{city.city9}
        </div>
      </div>
      <div className="sub-nav">
        <NavLink to='/search'
          activeClassName='selected'
          className='nav-link-icon'>
          <h2>{icon.searchIcon}FIND WORDS</h2>
        </NavLink>

        <NavLink to='/flashcards'
          activeClassName='selected'
          className='nav-link-icon'>
          <h2>PRACTICE{icon.cardIcon}<p className="deck-counter">{Object.keys(deck).length}</p></h2>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
