export const gatherJobs = jobs => ({
  type: 'GATHER_JOBS',
  jobs
});

export const resetJobs = () => ({
  type: 'RESET_JOBS'
});

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

export const login = (loginInfo) => ({
  type: 'LOGIN',
  loginInfo
})

export const logout = (email) => ({
  type: 'LOGOUT',
  email
})

