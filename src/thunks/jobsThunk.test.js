import {jobsThunk} from './jobsThunk';
import {isLoading, gotError, resetJobs } from '../actions';




const params = 'Woohoo'

describe('Jobs Thunk', () => {
  let mockJobs
  let mockDispatch

  beforeEach(() => {
    mockJobs = [
      {title: 'Dev Ops'}, 
      {title: 'Software Developer'}
    ]
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        bio: mockJobs
      })
    }))
  })

  it("should call series of dispatchs", () => {
    const thunk = jobsThunk(params);
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(resetJobs());
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  })

})