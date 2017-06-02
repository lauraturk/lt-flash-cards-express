const initialState = {
  cardBackHidden: true,
  card: {}

}

const cardRandomizer = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const makeRandomCard = (deck, deckControl) => {
  return deck[deckControl.matchedDeck][cardRandomizer(0, deck[deckControl.matchedDeck].length)]
}

export const controlState = (state = initialState, action) => {
  switch(action.type){

    case 'SHOW_ANSWER':
      return Object.assign({}, state, {
        cardBackHidden: false,
      })

    case 'NEXT_CARD':
      return Object.assign({}, state, {
        cardBackHidden: true,
        card: makeRandomCard(action.deck, action.deckControl)
      })

    default:
      return state
  }
}
