const initialState = {
  cardBackHidden: true,
  nextCard: false
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
        nextCard: true
      })

    default:
      return state

    // case 'PREV_CARD':
    //     return Obect.assign({})
  }
}
