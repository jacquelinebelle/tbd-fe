import { getCityDetails } from '../cityCalls';

describe('getCityDetails', () => {
    let mockCityDetails, mockQuery;

    beforeEach(() => {
      mockQuery = 'Denver, CO'
      mockCityDetails = { city: 'Denver, CO' };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCityDetails)
        });
      });
    });

    it('should be called with correct URL and headers', () => {
      const expected = ['https://radiant-peak-49102.herokuapp.com/api/v1/urban_area/details', {"headers": {"Content-Type": "application/json", "location": "Denver, CO"}, "method": "GET"}];

      getCityDetails(mockQuery);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('HAPPY: should return a parsed response', async () => {
      const result = await getCityDetails(mockQuery);

      expect(result).toEqual(mockCityDetails);
    });

    it('SAD: should return an error if status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getCityDetails(mockQuery)).rejects.toEqual(Error('Error fetching city details'));
    });

    it('SAD: should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: 'Error fetching city details'
        })
      });

      expect(getCityDetails(mockQuery)).rejects.toEqual(Error('Error fetching city details'));
    });
  });