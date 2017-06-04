import { targetLanguage } from '../../reducers/targetLanguage-reducer'

describe('languages reducer', () => {
  const initialState = {
    'target': 'en'
  }

  it('should return an empty array at default', () => {
    expect(targetLanguage(undefined, {})).toEqual(initialState)
  })

  it('add languages', () => {
    const action = {
      type: 'SELECT_LANGUAGE',
      language: 'es'
    }
    const expectedState = {'target': 'es'}
    
    expect(targetLanguage(initialState, action)).toEqual(expectedState)
  })
})
