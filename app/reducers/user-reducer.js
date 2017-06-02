export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER':
      let currentUser = action.userId
      return Object.assign(state, currentUser)
    case 'SIGN_OUT_USER':
      return state = {}

    default:
      return state;
  }
}
