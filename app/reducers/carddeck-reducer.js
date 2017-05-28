export const deck = (state = {'starter deck' : []}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return Object.assign({}, state, action.deckName)

    case 'CANCEL_CARD':
      return Object.assign({}, state)

    default:
      return state
  }

}
