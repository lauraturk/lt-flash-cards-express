export const targetLanguage = (state = {'target' : 'en'}, action) => {
  switch (action.type) {
    case 'SELECT_LANGUAGE':
      return Object.assign({}, state, {'target': action.language})
    default:
      return state
  }
}
