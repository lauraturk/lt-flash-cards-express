import { currentCard } from '../../reducers/card-reducer'

describe('current card reducer', () => {
  const initialState = {
    'id' : '',
    'frontCard': '',
    'backCard' : ''
  }

  it('should return an empty card as default', () => {

  expect(currentCard(undefined, {})).toEqual(initialState)
  })

  it('should create a new card', () => {
    const action = {
      type: 'CREATE_CARD',
      inputWord: 'casa',
      translatedWord: 'house',
      id: 'XYZ'
    }

    const expectedState = {
      id: 'XYZ',
      frontCard: 'casa',
      backCard: 'house'
    }

  expect(currentCard(undefined, action)).toEqual(expectedState)
  })

  it('should clear card from state', () => {
    const currentState = {
      id: 'XYZ',
      frontCard: 'casa',
      backCard: 'house'
    }
    
    const action = {
      type: 'CANCEL_CARD'
    }

    const expectedState = {
      id: '',
      frontCard: '',
      backCard: ''
    }

  expect(currentCard(currentState, action)).toEqual(expectedState)
  })
})
