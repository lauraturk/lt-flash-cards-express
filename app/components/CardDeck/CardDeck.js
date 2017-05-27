import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
// import { Card } from '../Card/Card'

export const CardDeck = (props) => {
  const { cardSet } = props

  // const cardArray = cardSet.map((card) => {
  //   return (
  //     <div>
  //       <div>
  //         {card.frontCard}
  //       </div>
  //       <div>
  //         {card.backCard}
  //       </div>
  //     </div>
  //   )
  // })

  return (
    <div className="page-wrapper">
      {cardSet.frontCard + cardSet.backCard}
    </div>
  )
}
