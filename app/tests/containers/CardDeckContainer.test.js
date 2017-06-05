import React from 'react'
import { mount  } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import CardDeckContainer from '../../containers/CardDeckContainer'
import CardDeck from '../../components/CardDeck/CardDeck'
import { Provider } from 'react-redux'

const mockStore = configureMockStore()({
  currentCard: {},
  cardControl: {},
  deckControl: {},
  deck: {'fun': []}
})

const setup = () => {
  const props = {
    cancelCard: jest.fn()
  }

  const Container = mount(<Provider store={mockStore}>
                            <CardDeckContainer />
                          </Provider>
                          )

  const Component = Container.find('CardDeck')

  return {
    Container,
    Component
  }

}

describe('card container components', () => {
  const { Component, Container } = setup()

  it('should render a card', () => {

    expect(Component.find('.decks').length).toEqual(1)
    expect(Component.length).toEqual(1)
  })

  it('pass the action creators', () => {

    expect(Object.keys(Component.props())).toContain('showDeck')
    expect(Object.keys(Component.props())).toContain('nextCard')
  })
})
