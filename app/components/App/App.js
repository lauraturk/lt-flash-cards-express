import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import SearchFormContainer from '../../containers/SearchFormContainer'
import CardContainer from '../../containers/CardContainer'
import CardDeckContainer from '../../containers/CardDeckContainer'

export const App = () => {
  return (
    <div className="page-wrapper">
      <SearchFormContainer />
      <CardContainer />
      <CardDeckContainer />
    </div>
  )
}
