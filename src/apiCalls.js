// export const fetchJobs = async (linkParams) => {
//   const serverUrl = 'https://radiant-peak-49102.herokuapp.com/api/v1/listings?'
//   try {
//     const options ={
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           ...linkParams
//         },
//       }
//       console.log(options)
//     const response  = await fetch(serverUrl, options)
//     const results = await response.json()
//     console.log(results)
//     return results.jobs
//   } catch (error) {
//     throw Error(error.message)
//   }
// }