import { setCurrentCity, isLoading, gotError } from '../actions';
import { getCityImages, getCityScores } from '../api/cityCalls';

export const cityThunk = (city) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            let image = await getCityImages(city);
            let scores = await getCityScores(city);
            let cityObject = {...image, ...scores}
            dispatch(isLoading(false));
            dispatch(setCurrentCity(cityObject));
        } catch (error) {
        dispatch(gotError(error.message));
      }
    }
  }

  