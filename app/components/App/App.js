import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { CardDeckHolder } from '../CardDeckHolder/CardDeckHolder'
import SearchFormContainer from '../../containers/SearchFormContainer'

export const App = () => {
  return (
    <div className="page-wrapper">
      <SearchFormContainer />
      <CardDeckHolder />
    </div>
  )
}
