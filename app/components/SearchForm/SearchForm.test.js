import React from 'react'
import { mount  } from 'enzyme'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

import SearchFormContainer from '../../containers/SearchFormContainer'
import SearchForm from './SearchForm'
import { Provider } from 'react-redux'
import { mockFetchCalls, resolveAfter2Seconds } from '../../test-helpers/fetch-mock'
import { oedScrubber } from '../../fetchHelpers/oedScrubber'
import { visionScrubber } from '../../fetchHelpers/visionScrubber'
import languageListStub from '../../test-helpers/stubs/google-lang-stub'
import translationStub from '../../test-helpers/stubs/google-translation-stub'
import oedDefinitionStub from '../../test-helpers/stubs/oed-definition-stub'
import googleVisionStub from '../../test-helpers/stubs/google-vision-stub'

const mockStore = configureMockStore()( {
  currentCard:{id: '', frontCard: '', backCard: ''},
  cardControl:{cardBackHidden: true, nextCard: false},
  deckControl:{showDeck: false, matchedDeck: ''},
  deck: {'fun': []},
  targetLanguage: {target: 'af'},
  foundWords: [],
  languages: [{language: "af", name: "Afrikaans"}, {language: "sq", name: "Albanian"}]
})
const props = {currentCard:{id: '', frontCard: '', backCard: ''},
              cardControl:{cardBackHidden: true, nextCard: false},
              deckControl:{showDeck: false, matchedDeck: ''},
              deck: {'fun': []},
              targetLanguage: {target: 'af'},
              foundWords: [],
              languages: [{language: "af", name: "Afrikaans"}, {language: "sq", name: "Albanian"}]
}


describe('search container', () => {



  const wrapper = mount( <Provider store={mockStore}>
                          <SearchForm currentCard={props.currentCard}
                                     targetLanguage={props.targetLanguage}
                                     cardControl={props.cardControl}
                                     deckControl={props.deckControl}
                                     currentDeck={props.deck}
                                     foundWords={props.foundWords}
                                     languages={props.languages} />
                        </Provider>)

  afterEach(() => {
    if(fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched)
    }
    fetchMock.restore()
  })

  it('should render on the page', () => {
    expect(wrapper.find('.search-tools-wrapper').length).toEqual(1)
  })

  it.skip('should translate a word', () => {

    mockFetchCalls()

    wrapper.setState({q: 'casa'})
    const button = wrapper.find('.button-submit')
    button.simulate('click')


    expect(wrapper.find('.word-info').text).toEqual('casa')
  })


})
