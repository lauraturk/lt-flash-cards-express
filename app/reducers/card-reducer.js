const initialState = {
  id: '',
  frontCard: '',
  backCard: '',
  targetLanguage: '',
  detectedSourceLanguage: '',
}
export const currentCard = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
    console.log(action)
    const newCard = Object.assign({}, state, action, delete action.type)
      return newCard

    case 'CANCEL_CARD':
      return initialState

      default:
        return state
  }

}
