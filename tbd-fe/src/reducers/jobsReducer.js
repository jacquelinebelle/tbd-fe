export const jobsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GATHER_JOBS':
      return action.jobs;
    default:
      return state;
  }
}