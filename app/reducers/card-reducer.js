export const card = (state = { 'id': '', 'frontCard': 'enter a word', 'backCard' : ''}, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      const newCard = {'id': action.id, 'frontCard': action.inputWord, 'backCard': action.translatedWord}
      return Object.assign({}, state, newCard)

    case 'DELETE_CARD':
      const reset = { 'id': '', 'frontCard': 'enter a word', 'backCard' : ''}
      return Object.assign({}, state, reset)

      default:
        return state
  }

}
