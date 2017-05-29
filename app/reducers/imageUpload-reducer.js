export const foundWords = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORDS':
      return [...state, action.imageWords]

    default:
      return state
  }
}
