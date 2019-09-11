export const gatherJobs = jobs => ({
  type: 'GATHER_JOBS',
  jobs
});

// export const gatherCities = cities => ({
//   type: 'GATHER_CITIES',
//   cities
// });

export const gatherCities = city => ({
  type: 'GATHER_CITIES',
  city
});

export const setCurrentJob = (job) => ({
  type: 'SET_CURRENT_JOB',
  job
})

export const setCurrentCity = (city) => ({
  type: 'SET_CURRENT_CITY',
  city
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
});

export const gotError = (message) => ({
  type: 'GOT_ERROR',
  message
});