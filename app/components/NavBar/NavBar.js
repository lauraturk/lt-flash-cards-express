import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as icon from '../../assets/svg-icons'

export const NavBar = () => {
  return (
    <div>
      <NavLink to='/settings' activeClassName='selected' className='icon'>{icon.gearIcon}</NavLink>
      <NavLink to='/search' activeClassName='selected' className='icon'>{icon.searchIcon}</NavLink>
      <NavLink to='/carddecks' activeClassName='selected' className='icon'>{icon.cardIcon}</NavLink>
    </div>
  )
}
