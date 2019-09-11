import {cityReducer, currentCity} from './cityReducer';

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
      city: expected
    });
    expect(result).toEqual(expected);
  });

  it("should return the inital state of currentCity", () => {
    const expected = {};
    const result = currentCity(undefined, {});
    expect(result).toEqual(expected);
  })

  it("should return a new object with city inside", () => {
    const expected = {name: 'Dallas', population: 1500000}
    const result = currentCity(undefined, {
      type: "SET_CURRENT_CITY",
      city: expected
    });
    expect(result).toEqual(expected);
  })

})