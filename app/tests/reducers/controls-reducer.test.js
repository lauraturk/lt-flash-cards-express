import { cardControl } from '../../reducers/controls-reducer'

describe('controls reducer', () => {
  const initialState = {
    cardBackHidden: true,
    card: {}
  }

  it('returns the intial state on default', () => {
    expect(cardControl(undefined, {})).toEqual(initialState)
  })

  it('shows the answer on the card', () => {
    const action = {
      type: 'SHOW_ANSWER',
    }

    const expectedState = {
      cardBackHidden: false,
      card: {}
    }
    expect(cardControl(initialState, action)).toEqual(expectedState)
  })

  it('randomizes next card in deck', () => {
    const action = {
      type: 'NEXT_CARD',
      deck: {'starter deck': [],
             'blue': [{id: 'XYZ', 'frontCard': 'house', 'backCard': 'casa'}]},
      deckControl: {matchedDeck: "blue", showDeck: false}
    }
    const expectedState = {
      cardBackHidden: true,
      card: {id: 'XYZ', 'frontCard': 'house', 'backCard': 'casa'}
    }

    expect(cardControl(initialState, action)).toEqual(expectedState)
  })
})
