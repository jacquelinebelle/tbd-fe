import {cityReducer} from './cityReducer';

describe('cityReducer', () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = cityReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return new array of cities", () => {
    const expected = ["random city 1", "random city 2"];
    const result = cityReducer(undefined, {
      type: "GATHER_CITIES",
      cities: expected
    });
    expect(result).toEqual(expected);
  });

})