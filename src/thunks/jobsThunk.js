import { gatherJobs, isLoading, gotError, resetJobs } from '../actions';
import { getJobs } from '../api/jobCalls';
// import { getCityscores, getCityImages } from '../api/cityCalls';

export const jobsThunk = (params) => {
    return async (dispatch) => {
      try {
        dispatch(resetJobs());
        dispatch(isLoading(true));
        const jobs = await getJobs(params);
        dispatch(isLoading(false));
        dispatch(gatherJobs(jobs));
      } catch (error) {
        dispatch(gotError(error.message));
      }
    }
  }