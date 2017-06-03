import React from 'react'
import { Route } from 'react-router-dom'
import SearchFormContainer from '../../containers/SearchFormContainer'
import CardDeckContainer from '../../containers/CardDeckContainer'
import SettingsFormContainer from '../../containers/SettingsFormContainer'
import NavBar from '../NavBar/NavBar'
import { Home } from '../Home/Home'
import {citiesArray} from '../../assets/city-icons'


export const App = () => {

  ////randomizeCities

  return (
    <main className="page-wrapper">
      {citiesArray.filter((city, index) => index <= 4)}
      <NavBar />
      <div className="app-wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={SettingsFormContainer} />
        <Route path="/search" component={SearchFormContainer} />
        <Route path="/flashcards" component={CardDeckContainer} />
      </div>
      {citiesArray.filter((city, index) => index > 4)}
    </main>
  )
}
