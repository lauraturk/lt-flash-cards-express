import { languages } from '../../reducers/languages-reducer'

describe('languages reducer', () => {

  it('should return an empty array at default', () => {
    expect(languages(undefined, {})).toEqual([])
  })

  it('add languages', () => {
    const action = {
      type: 'ADD_LANGUAGES',
      languageSet: [{language: 'es', name: 'Spanish'}, {language: 'en', name: 'English'}]
    }
    const expectedState = [{language: 'es', name: 'Spanish'}, {language: 'en', name: 'English'}]

    expect(languages([], action)).toEqual(expectedState)
  })
})
