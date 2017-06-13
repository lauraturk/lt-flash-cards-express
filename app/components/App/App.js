import React from 'react'
import { Route } from 'react-router-dom'
import SearchFormContainer from '../../containers/SearchFormContainer'
import CardDeckContainer from '../../containers/CardDeckContainer'
import SettingsFormContainer from '../../containers/SettingsFormContainer'
import NavBarContainer from '../../containers/NavBarContainer'
import { Home } from '../Home/Home'



export const App = () => {

  return (
    <div className="page-wrapper">
      <NavBarContainer />
      <main className="app-wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchFormContainer} />
        <Route path="/flashcards" component={CardDeckContainer} />
      </main>
    </div>
  )
}
