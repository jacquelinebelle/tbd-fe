export const cityReducer = (state = [], action) => {
  switch(action.type) {
    case 'GATHER_CITIES':
      state.push(action.city);
      return state;
    default:
      return state;
  }
}

export const currentCity = (state = {}, action) => {
  switch(action.type) {
    case 'SET_CURRENT_CITY':
      return action.city;
    default:
      return state;
  }
}