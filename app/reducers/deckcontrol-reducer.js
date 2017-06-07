const initialState = {
  matchedDeck: '',
  showDeck: false
}

const matchDeck = (deckName, currentDeck) => {
  const matched = Object.keys(currentDeck).find(deck => {
    return deck === deckName
  })
  return matched
}


export const deckControl = (state = initialState, action) => {
  switch(action.type){
    case 'SHOW_DECK':
      return {
        matchedDeck: matchDeck(action.deckName, action.currentDeck),
        showDeck: true
      }
    case 'HIDE_DECK':
      return {
        matchedDeck: '',
        showDeck: false
      }

    default:
      return state
  }
}
