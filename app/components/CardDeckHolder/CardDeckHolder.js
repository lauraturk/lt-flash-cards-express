import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { CardDeck } from '../CardDeck/CardDeck'

export const CardDeckHolder = () => {
  return (
    <div className="holder-wrapper">
      <CardDeck />
    </div>
  )
}
