import { foundWords } from '../../reducers/imageUpload-reducer'

describe('deck controls reducer', () => {

  it('returns the intial state on default', () => {
    expect(foundWords(undefined, {})).toEqual([])
  })

  it('add words', () => {
    const action = {
      type: 'ADD_WORDS',
      imageWords: ['pablo', 'neruda', 'es', 'un', 'poeta']
    }
    const expectedState = ['pablo', 'neruda', 'es', 'un', 'poeta']


    expect(foundWords(undefined, action)).toEqual(expectedState)
  })

  it('clear words', () => {
    const action = {
      type: 'CLEAR_WORDS'
    }
    const expectedState = []

    expect(foundWords(['pablo', 'neruda', 'es', 'un', 'poeta'], action)).toEqual(expectedState)
  })

})
