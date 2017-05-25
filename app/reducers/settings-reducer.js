export const languages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LANGUAGES':
      return [...state, ...action.languageSet]
    default:
      return state
  }
}

export const targetLanguage = (state = {'target' : 'en'}, action) => {
  switch (action.type) {
    case 'SELECT_LANGUAGE':
      return Object.assign({}, state, {'target': action.language})
    default:
      return state
  }
}
