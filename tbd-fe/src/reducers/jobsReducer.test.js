import {jobsReducer, loading, error} from './jobsReducer';

describe('jobsReducer', () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = jobsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return false as the initial state for loading", () => {
    const result = loading(undefined, {});
    expect(result).toEqual(false);
  });

  it("should return false as the initial state for error", () => {
    const result = error(undefined, {});
    expect(result).toEqual(false);
  });

  it("should return new array of jobs", () => {
    const expected = ["random data 1", "random data 2"];
    const result = jobsReducer(undefined, {
      type: "GATHER_JOBS",
      jobs: expected
    });
    expect(result).toEqual(expected);
  });

  it("should return boolean of true", () => {
    const result = loading(undefined, {
      type: "IS_LOADING",
      bool: true
    });
    expect(result).toEqual(true);
  });

  it("should return the initial state", () => {
    const expected = 'An Error Has Occured';
    const result = error(undefined, {
      type: "GOT_ERROR",
      message: expected
    });
    expect(result).toEqual(expected);
  });

})