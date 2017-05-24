import React, { Component } from 'react'
import { ReactDom, render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers, } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { BrowserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'

import { App } from './components/App/App'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(devTools, applyMiddleware())


  // }
  // <ConnectedRouter>
  // </ConnectedRouter>,

render(

    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('main'))
