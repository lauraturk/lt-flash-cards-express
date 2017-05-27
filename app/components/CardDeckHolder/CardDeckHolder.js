import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import CardDeckContainer from '../../containers/CardDeckContainer'
import CardContainer from '../../containers/CardContainer'
// import { Card } from '../Card/CardDeck'

export const CardDeckHolder = () => {
  return (
    <div className="holder-wrapper">
      <CardContainer />
      <CardDeckContainer />
    </div>
  )
}
