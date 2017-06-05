export const deck = (state = {'starter deck': []}, action) => {

  const createDeck = (deckName, currentDeck, currentCard ) => {
    let match = Object.keys(currentDeck).find(key => key === deckName)
    return !match ? {[deckName]: [currentCard]} : currentDeck[deckName].push(currentCard)
  }

  switch (action.type) {
    case 'ADD_CARD':
      return Object.assign(
        {}, state, createDeck(action.deckName, action.currentDeck, action.currentCard))

    default:
      return state
  }

}
