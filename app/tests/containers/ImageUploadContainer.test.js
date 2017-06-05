import React from 'react'
import { mount  } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import ImageUploadContainer from '../../containers/ImageUploadContainer'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import { Provider } from 'react-redux'

const mockStore = configureMockStore()({
  currentCard: {},
  cardControl: {},
  deckControl: {},
  deck: {'fun': []},
  foundWords: [],
  targetLanguage: {target: 'es'}
})

const setup = () => {
  const props = {
    cancelCard: jest.fn()
  }

  const Container = mount(<Provider store={mockStore}>
                            <ImageUploadContainer />
                          </Provider>
                          )

  const Component = Container.find('ImageUpload')

  return {
    Container,
    Component
  }

}

describe('card container components', () => {
  const { Component, Container } = setup()

  it('should render a card', () => {

    expect(Component.find('.image-upload-wrapper').length).toEqual(1)
    expect(Component.length).toEqual(1)
  })

  it('pass the action creators', () => {

    expect(Object.keys(Component.props())).toContain('findImageWords')
    expect(Object.keys(Component.props())).toContain('clearWords')
    expect(Object.keys(Component.props())).toContain('createTranslationCard')
    expect(Object.keys(Component.props())).toContain('createDefinitionCard')
  })
})
