import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../actions/index'
import { oedScrubber } from '../fetchHelpers/oedScrubber'
import { visionScrubber } from '../fetchHelpers/visionScrubber'
import languageListStub from '../test-helpers/stubs/google-lang-stub'
import translationStub from '../test-helpers/stubs/google-translation-stub'
import oedDefinitionStub from '../test-helpers/stubs/oed-definition-stub'
import googleVisionStub from '../test-helpers/stubs/google-vision-stub'
import {resolveAfter2Seconds, mockFetchCalls } from '../test-helpers/fetch-mock'


describe('helper functions in actions', () => {


  it('should return first definition', () => {
    const cleanedDefinition = ['Construcción cubierta destinada a ser habitada']
    expect(oedScrubber(oedDefinitionStub)).toEqual(cleanedDefinition)
    })

  it('should return an array of words', () => {
    const cleanedWords = [ 'Pablo', 'Neruda','es','un','poeta','chileno',
                           'galardonado','con', 'el','Prem','de','Literatura',
                           '.','También','se','desempeño','como','diplomaticoy']
    expect(visionScrubber(googleVisionStub)).toEqual(cleanedWords)
    })

})

describe('actions', () => {

  it('should add a list of languages', () => {
    const languageList = [{'language':'es', 'name':'spanish'}, {'language':'en', 'name':'english'}]

    const expectedAction = {
      type: 'ADD_LANGUAGES',
      languageSet: languageList
    }

    expect(actions.addLanguages(languageList)).toEqual(expectedAction)
  })

  it('should select a language', () => {
    const selectedLanguage = {'language':'es', 'name':'spanish'}

    const expectedAction = {
      type: 'SELECT_LANGUAGE',
      language: {'language': 'es', 'name': 'spanish'}
    }

    expect(actions.selectLanguage(selectedLanguage)).toEqual(expectedAction)
  })

  it('should create a card', () => {
    const inputWord = 'casa'
    const translatedWord = 'house'

    const expectedAction = {
      type: 'CREATE_CARD',
      inputWord: 'casa',
      translatedWord: 'house',

    }

    expect(actions.createCard(inputWord, translatedWord).type).toEqual(expectedAction.type)
    expect(actions.createCard(inputWord, translatedWord).inputWord).toEqual(expectedAction.inputWord)
    expect(actions.createCard(inputWord, translatedWord).translatedWord).toEqual(expectedAction.translatedWord)
  })

  it('should cancel a card', () => {

    const expectedAction = {
      type: 'CANCEL_CARD',
    }

    expect(actions.cancelCard()).toEqual(expectedAction)
  })

  it('should add a card to a deck', () => {
    const deckName = 'fun'

    const expectedAction = {
      type: 'ADD_CARD',
      deckName: 'fun'
    }

    expect(actions.addCard(deckName)).toEqual(expectedAction)
  })

  it('should add words from google vision', () => {
    const imageWords = [ 'Pablo', 'Neruda','es','un','poeta']

    const expectedAction = {
      type: 'ADD_WORDS',
      imageWords: [ 'Pablo', 'Neruda','es','un','poeta']
    }

    expect(actions.addFoundWords(imageWords)).toEqual(expectedAction)
  })

  it('should clearWords', () => {
    const expectedAction = {
      type: 'CLEAR_WORDS',
    }

    expect(actions.clearWords()).toEqual(expectedAction)
  })

  it('should show the selected deck', () => {
    const deckName = 'food'
    const expectedAction = {
      type: 'SHOW_DECK',
      deckName: 'food'
    }

    expect(actions.showDeck(deckName)).toEqual(expectedAction)
  })

  it('should show answer', () => {
    const expectedAction = {
      type: 'SHOW_ANSWER',
    }

    expect(actions.showAnswer()).toEqual(expectedAction)
  })

  it('should shuffle to next card', () => {
    const deckControl = {matchedDeck: "starter deck", showDeck: false}
    const deck = {'starter deck': ['card1', 'card2', 'card3']}

    const expectedAction = {
      type: 'NEXT_CARD',
      deckControl: {matchedDeck: "starter deck", showDeck: false},
      deck: {'starter deck': ['card1', 'card2', 'card3']}
    }

    expect(actions.nextCard(deckControl, deck)).toEqual(expectedAction)
  })
})

describe('api fetches in actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched)
    }
    fetchMock.restore()
  })

  it('should fetch language list', () => {
    mockFetchCalls()

    const expectedAction = [{languageSet: [...languageListStub.data.languages],
                            type: 'ADD_LANGUAGES'}]

    const store = mockStore({languages: []})

    return store.dispatch(actions.loadLanguageList()).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  it.skip('should translate a word', () => {
    mockFetchCalls()

    const expectedAction = {type: 'CREATE_CARD',
                            inputWord: '',
                            translatedWord: '',
                            id: ''}

    const store = mockStore({currentCard: {}})

    return store.dispatch(actions.translateWord({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
