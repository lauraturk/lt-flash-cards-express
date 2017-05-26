import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import CardDeckContainer from '../../containers/CardDeckContainer'
// import { Card } from '../Card/CardDeck'

export const CardDeckHolder = () => {
  return (
    <div className="holder-wrapper">
      <CardDeckContainer />
    </div>
  )
}
