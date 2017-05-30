export const foundWords = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORDS':
      return [...state, ...action.imageWords]

    case 'CLEAR_WORDS':
      return state = []
      
    default:
      return state
  }
}
