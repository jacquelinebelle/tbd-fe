import {cityThunk} from './cityThunks';
import {isLoading} from '../actions/index'

const city = {name: 'Dallas, TX'}

describe('City Thunks', () => {
  let mockImages
  let mockDispatch

  beforeEach(() => {
    mockImages = [
      {title: 'Here is a picture'}, 
      {title: 'Here is another picture'}
    ]
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        images: mockImages
      })
    }))
  })

  it("should call series of dispatchs", () => {
    const thunk = cityThunk(city);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  })

})