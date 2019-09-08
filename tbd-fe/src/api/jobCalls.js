export const getJobs = async (linkParams) => {
    const serverUrl = 'https://radiant-peak-49102.herokuapp.com/api/v1/listings?'
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...linkParams
            },
        }
        const response = await fetch(serverUrl, options)
        if (!response.ok) {
            throw new Error('Error fetching jobs')
        }
        const results = await response.json()
        return results.jobs
    } catch (error) {
        throw Error(error.message)
    }
}