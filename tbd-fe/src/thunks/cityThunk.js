import { gatherCities, isLoading, gotError } from '../actions';
import { getCityDetails } from '../api/cityCalls';

export const cityThunk = (locations) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const cities = await Promise.all(locations.map(city => {
                console.log(city)
                return getCityDetails(city);
            }));
            dispatch(isLoading(false));
            dispatch(gatherCities(cities));
            return cities;
        } catch (error) {
        dispatch(gotError(error.message));
      }
    }
  }