import { deckControl } from '../../reducers/deckControl-reducer'

describe('deck controls reducer', () => {
  const initialState = {
    matchedDeck: '',
    showDeck: false
  }

  it('returns the intial state on default', () => {
    expect(deckControl(undefined, {})).toEqual(initialState)
  })

  it('shows the deck', () => {
    const action = {
      type: 'SHOW_DECK',
      deckName: 'food',
      currentDeck: {'starter deck': [],
                    'food': [{'card1':'card1'}]
      }
    }

    const expectedState = {
      matchedDeck: 'food',
      showDeck: true
    }
    expect(deckControl(initialState, action)).toEqual(expectedState)
  })

})
