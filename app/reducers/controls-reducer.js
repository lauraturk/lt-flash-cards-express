const initialState = {
  cardBackHidden: true,
  card: {},
  showMore: false

}

const cardRandomizer = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const makeRandomCard = (deck, deckControl) => {
  return deck[deckControl.matchedDeck][cardRandomizer(0, deck[deckControl.matchedDeck].length)]
}

export const cardControl = (state = initialState, action) => {
  switch(action.type){

    case 'SHOW_ANSWER':
      return Object.assign({}, state, {
        cardBackHidden: !state.cardBackHidden,
      })

    case 'NEXT_CARD':
      return Object.assign({}, state, {
        cardBackHidden: true,
        card: makeRandomCard(action.deck, action.deckControl)
      })

    case 'SHOW_MORE':
      return Object.assign({}, state, {
        showMore: !state.showMore
      })

    default:
      return state
  }
}
