const initialState = {
  cardBackHidden: true,
  nextCard: false,
  matchedDeck: '',
  showDeck: false
}

export const controlState = (state = initialState, action) => {
  switch(action.type){

    case 'SHOW_ANSWER':
      return Object.assign({}, state, {
        cardBackHidden: false,
        nextCard: false
      })

    case 'NEXT_CARD':
      return Object.assign({}, state, {
        cardBackHidden: true,
        nextCard: true,
      })

    case 'SHOW_DECK':
      return Object.assign({}, state, {
        cardBackHidden: true,
        nextCard: false,
        matchedDeck: action.deckName,
        showDeck: true
      })


    default:
      return state

    // case 'PREV_CARD':
    //     return Obect.assign({})
  }
}
