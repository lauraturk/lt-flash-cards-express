import { deck } from '../../reducers/carddeck-reducer'

describe('card deck reducer', () => {
  const initialState = {
    'starter deck' : []
  }

  it('returns the intial state on default', () => {
    expect(deck(undefined, {})).toEqual(initialState)
  })

  it('adds a card to a deck by name', () => {
    const action = {
      type: 'ADD_CARD',
      deckName: 'fun',
      currentDeck: initialState,
      currentCard: {'id': 'XYZ', 'frontCard': 'casa', 'backCard': 'house'}
    }

    const expectedState = {
      'starter deck': [],
      'fun': [{'id': 'XYZ', 'frontCard': 'casa', 'backCard': 'house'}]
    }

    expect(deck(initialState, action)).toEqual(expectedState)
  })
})
