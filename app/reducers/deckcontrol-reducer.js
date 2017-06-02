const initialState = {
  matchedDeck: '',
  showDeck: false
}

export const deckControl = (state = initialState, action) => {
  switch(action.type){
    case 'SHOW_DECK':
      return Object.assign({}, state, {
        matchedDeck: action.deckName,
        showDeck: true
    })

    default:
      return state
  }
}
