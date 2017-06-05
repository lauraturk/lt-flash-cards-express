const initialState = {
  'id' : '',
  'frontCard': '',
  'backCard' : ''
}
export const currentCard = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      const newCard = {'id': action.id, 'frontCard': action.inputWord, 'backCard': action.translatedWord}
      return newCard

    case 'CANCEL_CARD':
      return initialState

      default:
        return state
  }

}
