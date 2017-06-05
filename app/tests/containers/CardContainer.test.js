import React from 'react'
import { mount  } from 'enzyme'

import CardContainer from '../../containers/CardContainer'
import Card from '../../components/Card/Card'
import { Provider } from 'react-redux'

const mockStore = configureMockStore({
  currentCard: {id: 'XYZ', frontCard: 'casa', backCard: 'house'},
  cardControl: {cardBackHidden: true, card: {}},
  deckControl: {matchedDeck: "", showDeck: false}
})

const setup = () => {
  const props = {
    cancelCard: jest.fn()
  }

  const Container = mount(<Provider store={mockStore}>
                            <CardContainer />
                          </Provider>
                          )

  const Component = Container.find(Card)

  return {
    Container,
    Component
  }

}

describe.skip('testing components', () => {
  describe.skip('card component', () => {

    it.skip('should render a card', () => {
      const { Component } = setup()

      expect(Component.find('.card').length).toEqual(1)
      expect(Component.length).toEqual(1)
    })
  })
})
