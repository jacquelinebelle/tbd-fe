export const getJobs = async (linkParams) => {
    const serverUrl = 'https://radiant-peak-49102.herokuapp.com/api/v1/listings'
    try {
        const test = {
            "Content-Type" : "application/json",
            ...linkParams
        }
        
        let  headers = JSON.stringify(test)
        const options = {
            method: "GET",
            headers
        }
        console.log(options)
        const response = await fetch(serverUrl, options)
        const results = await response.json()
        console.log(results)
        return results.jobs
    } catch (error) {
        throw Error(error.message)
    }
}
// export const getJobs = async query => {
//     const parameters = makeParameters(query);
//     try {
//         const res = await fetch(`https://radiant-peak-49102.herokuapp.com/api/v1/listings?${parameters}`);
//         if (!res.ok) {
//             throw new Error('Error fetching job listings')
//         }
//         const jobs = await res.json();
//         return jobs;
//     } catch (error) {
//         throw new Error('Error fetching job listings')
//     } 
// }