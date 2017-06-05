import React from 'react'
import { mount  } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import SearchFormContainer from '../../containers/SearchFormContainer'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Provider } from 'react-redux'

const mockStore = configureMockStore()({
  currentCard: {},
  cardControl: {},
  deckControl: {},
  deck: {'fun': []},
  targetLanguage: {target: 'es'},
  foundWords: [],
  languages: []
})

const setup = () => {
  const props = {
    cancelCard: jest.fn()
  }

  const Container = mount(<Provider store={mockStore}>
                            <SearchFormContainer />
                          </Provider>
                          )

  const Component = Container.find('SearchForm')

  return {
    Container,
    Component
  }

}

describe('card container components', () => {
  const { Component, Container } = setup()

  it('pass the action creators', () => {

    expect(Object.keys(Component.props())).toContain('populateLanguages')
    expect(Object.keys(Component.props())).toContain('createTranslationCard')
    expect(Object.keys(Component.props())).toContain('createDefinitionCard')
    expect(Object.keys(Component.props())).toContain('addCard')
    expect(Object.keys(Component.props())).toContain('cancelCard')
  })
})
