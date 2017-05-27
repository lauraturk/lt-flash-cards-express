import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'


export default class CardDeck extends Component{
  constructor() {
    super()
    this.state = {
      deck: ''
    }
  }

  handleDeckChange(e) {
    this.setState({deck: e.target.value})
    //// check keys of currentDeck for the incoming deck name
  }


    //// if deck name exists => add card to existing deck
    //// if deck name does not exist, create new key of deck name and add card
  findDeck() {
    let match = Object.keys(this.props.currentDeck).find(key => key === this.state.deck)
    return !match ? {[this.state.deck]: [this.props.currentCard]} : this.props.currentDeck[this.state.deck].push(this.props.currentCard)
  }



  // const { currentDeck, currentCard, addCard, deleteCard } = props


  render() {
    return (
      <div className="page-wrapper">
        <label>Add to battle deck:</label>
        <input type="text"
               value={this.state.deck}
               onChange={(e) => this.handleDeckChange(e)}></input>
        <button onClick={() => this.props.addCard(this.findDeck())}></button>
      </div>
    )
  }
}
