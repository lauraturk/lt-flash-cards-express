import React, { Component } from 'react'
// import { Route, Link, NavLink } from 'react-router-dom'
// import { CardDeck } from '../CardDeck/CardDeck'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: 'manzana',
      target: 'en'
      // target: 'en'
    }
  }

  componentDidMount() {
    console.log('mounted?')
    return fetch('/api/languages', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({'q' : 'manzana', 'target': 'en'})
        })
        .then(response => response.json())
        .then(data => console.log(data))
  }

  handleChange() {
    this.setState({q: e.target.value})
  }

  render() {
    return (
      <div className="search-form-wrapper">
        <input type="text" value={this.state.q} onChange={(e) => this.handleChange(e)}></input>
      </div>
    )
  }
}
