import React from 'react'
import { Route } from 'react-router-dom'
import SearchFormContainer from '../../containers/SearchFormContainer'
import CardDeckContainer from '../../containers/CardDeckContainer'
import SettingsFormContainer from '../../containers/SettingsFormContainer'
import NavBarContainer from '../../containers/NavBarContainer'
import { Home } from '../Home/Home'
import * as city from '../../assets/city-icons'


export const App = () => {

  return (
    <main className="page-wrapper">
      <NavBarContainer />
      <div className="app-wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchFormContainer} />
        <Route path="/flashcards" component={CardDeckContainer} />
      </div>
      <div className="city-scape">
        {city.city1}{city.city2}{city.city3}{city.city4}{city.city5}{city.city6}
      </div>
    </main>
  )
}
