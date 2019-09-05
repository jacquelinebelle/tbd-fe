const makeParameters = query => {
    return Object.keys(query).reduce((parameters, field) => {   
        if (query[field]) {
            parameters = parameters + `&${field}=${query[field]}`;
        }
        return parameters;
    }, '')
}

export const getJobs = async query => {
    const parameters = makeParameters(query);
    try {
        const res = await fetch(`https://radiant-peak-49102.herokuapp.com/api/v1/listings?${parameters}`);
        if (!res.ok) {
            throw new Error('Error fetching job listings')
        }
        const jobs = await res.json();
        return jobs;
    } catch (error) {
        throw new Error('Error fetching job listings')
    } 
}