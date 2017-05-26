export const card = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const newCard = {'frontCard': action.inputWord, 'backCard': action.translatedWord}
      return [...state, newCard ]

      default:
        return state
  }

}
