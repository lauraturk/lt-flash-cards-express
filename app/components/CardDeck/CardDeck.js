import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import CardContainer from '../../containers/CardContainer'

export const CardDeck = () => {
  return (
    <div>card deck</div>
  )
}
// export default class CardDeck extends Component{
//   constructor() {
//     super()
//     this.state = {
//       deck: ''
//     }
//   }
//
//   handleDeckChange(e) {
//     this.setState({deck: e.target.value})
//   }
//
//   createDeck() {
//     const { currentDeck, currentCard } = this.props
//     let match = Object.keys(currentDeck).find(key => key === this.state.deck)
//     return !match ? {[this.state.deck]: [currentCard]} : currentDeck[this.state.deck].push(currentCard)
//   }
//
//   // const { currentDeck, currentCard, addCard, cancelCard } = props
//
//   render() {
//
//     // console.log(Object.keys(this.props.currentDeck))
//     // cardDeckArray = Object.keys(this.props.currentDeck).map((deck) => {
//     //   return (
//     //
//     //
//     //
//     //   )
//     // })
//
//     // {deck.map(card => {return (<CardContainer  />)})}
//     // {cardDeckArray}
//
//     return (
//       <div className="page-wrapper">
//         <label>Add to battle deck:</label>
//         <input type="text"
//                value={this.state.deck}
//                onChange={(e) => this.handleDeckChange(e)}></input>
//         <button onClick={() => this.props.addCard(this.createDeck())}></button>
//       </div>
//     )
//   }
// }
