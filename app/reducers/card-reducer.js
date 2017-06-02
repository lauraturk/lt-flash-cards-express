const initialState = {
  'id' : '',
  'frontCard': 'enter a word',
  'backCard' : ''
}
export const currentCard = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      const newCard = {'id': action.id, 'frontCard': action.inputWord, 'backCard': action.translatedWord}
      return Object.assign({}, state, newCard)

    case 'CANCEL_CARD':
      const reset = { 'id': '', 'frontCard': 'enter a word', 'backCard' : ''}
      return Object.assign({}, state, reset)

      default:
        return state
  }

}
