export const deck = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const newCard =  { action.deckName : action.card }
      return Object.assign({}, state, newCard)

    // case 'DELETE_CARD':
    //   return Object.assign({}, state)

      default:
        return state
  }

}
