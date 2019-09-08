import { getJobs } from '../jobCalls';

describe('getJobs', () => {
    let mockJobs, mockQuery;

    beforeEach(() => {
      mockQuery = { keywords: 'busy' }
      mockJobs = [{ title: 'valet' }];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockJobs)
        });
      });
    });

    it('should be called with correct URL and headers', () => {
      const expected = ['https://radiant-peak-49102.herokuapp.com/api/v1/listings?', {"headers": {"Content-Type": "application/json", "keywords": "busy"}, "method": 
      "GET"}];

      getJobs(mockQuery);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it.skip('HAPPY: should return a parsed response', async () => {
      const result = await getJobs(mockQuery);

      await expect(result).toEqual(mockJobs);
    });

    it('SAD: should return an error if status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getJobs(mockQuery)).rejects.toEqual(Error('Error fetching jobs'));
    });

    it('SAD: should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: 'Error fetching jobs'
        })
      });

      expect(getJobs(mockQuery)).rejects.toEqual(Error('Error fetching jobs'));
    });
  });