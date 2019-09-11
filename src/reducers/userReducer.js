export const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state = action.loginInfo
    case  'LOGOUT':
      return state = {}
    default:
      return state
  }
}