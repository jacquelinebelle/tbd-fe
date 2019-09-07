export const gatherJobs = jobs => ({
  type: 'GATHER_JOBS',
  jobs
});

export const gatherCities = cities => ({
  type: 'GATHER_CITIES',
  cities
});

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
});

export const gotError = (message) => ({
  type: 'GOT_ERROR',
  message
});