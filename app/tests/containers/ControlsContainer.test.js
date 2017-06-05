import React from 'react'
import { mount  } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import ControlsContainer from '../../containers/ControlsContainer'
import Controls from '../../components/Controls/Controls'
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
                            <ControlsContainer />
                          </Provider>
                          )

  const Component = Container.find('Controls')

  return {
    Container,
    Component
  }

}

describe('card container components', () => {
  const { Component, Container } = setup()

  it('should render a card', () => {

    expect(Component.find('.controls-wrapper').length).toEqual(1)
    expect(Component.length).toEqual(1)
  })

  it('pass the action creators', () => {

    expect(Object.keys(Component.props())).toContain('showAnswer')
    expect(Object.keys(Component.props())).toContain('nextCard')
  })
})
