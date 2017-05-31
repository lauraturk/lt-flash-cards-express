export const controlState = (state = {cardBackHidden: true, nextCard: false}, action) => {
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
