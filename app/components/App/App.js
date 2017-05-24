import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { CardDeckHolder } from '../CardDeckHolder/CardDeckHolder'
import SearchForm from '../SearchForm/SearchForm'

export const App = () => {
  return (
    <div className="page-wrapper">
      <SearchForm />
      <CardDeckHolder />
    </div>
  )
}
