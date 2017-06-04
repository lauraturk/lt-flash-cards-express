export const foundWords = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORDS':
      return [...action.imageWords]

    case 'CLEAR_WORDS':
      return []

    default:
      return state
  }
}
