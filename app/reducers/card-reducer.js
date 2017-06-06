const initialState = {
  id: '',
  frontCard: '',
  backCard: '',
  targetLanguage: '',
  detectedSourceLanguage: '',
}

//check if action has a definition, if so replace backCard w/ definition
// Object.assign(state, {backCard: action.definition})
export const currentCard = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
    // const whatIwant = action.definition ? {backCard: action.definition} : {action.backCard}
    //pass whatIwant below
    const newCard = Object.assign({}, state, action, delete action.type)
      return newCard

    case 'CANCEL_CARD':
      return initialState

      default:
        return state
  }

}
