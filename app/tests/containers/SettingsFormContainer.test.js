import React from 'react'
import { mount  } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import SettingsFormContainer from '../../containers/SettingsFormContainer'
import SettingsForm from '../../components/SettingsForm/SettingsForm'
import { Provider } from 'react-redux'

const mockStore = configureMockStore()({
  currentCard: {},
  cardControl: {},
  deckControl: {},
  deck: {'fun': []},
  foundWords: [],
  targetLanguage: {target: 'es'},
  languages: []
})

const setup = () => {
  const props = {
    cancelCard: jest.fn()
  }

  const Container = mount(<Provider store={mockStore}>
                            <SettingsFormContainer />
                          </Provider>
                          )

  const Component = Container.find('SettingsForm')

  return {
    Container,
    Component
  }

}

describe('card container components', () => {
  const { Component, Container } = setup()

  it('should render a card', () => {

    expect(Component.find('.settings-form-wrapper').length).toEqual(1)
    expect(Component.length).toEqual(1)
  })

  it('pass the action creators', () => {

    expect(Object.keys(Component.props())).toContain('selectTargetLanguage')
  })
})
