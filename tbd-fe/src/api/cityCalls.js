export const getCityDetails = async (city) => {
    const serverUrl = 'https://radiant-peak-49102.herokuapp.com/api/v1/urban_area/details'
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                location: city
            },
        }
        const response = await fetch(serverUrl, options)
        const results = await response.json()
        return {city: city, ...results};
    } catch (error) {
        throw Error(error.message)
    }
}