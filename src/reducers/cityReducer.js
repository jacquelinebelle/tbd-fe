export const cityReducer = (state = [], action) => {
  switch(action.type) {
    case 'GATHER_CITIES':
      return action.cities;
    default:
      return state;
  }
}