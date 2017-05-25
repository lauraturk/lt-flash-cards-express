export const languages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LANGUAGES':
      return [...state, ...action.languageSet]

    default:
      return state
  }
}
