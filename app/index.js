import React, { Component } from 'react'
import { ReactDom, render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers, } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { BrowserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import thunk from 'redux-thunk'

import { App } from './components/App/App'
import { rootReducer } from './reducers/index.js'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools, applyMiddleware(thunk, routeMiddleware))




render(

  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App store={store}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'))
