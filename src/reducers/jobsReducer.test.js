import {jobsReducer, loading, error, currentJob} from './jobsReducer';

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

  it("should return the an empty array from RESET_JOBS", () => {
    const result = jobsReducer(undefined, {
      type: "RESET_JOBS"
    });
    expect(result).toEqual([]);
  });

  it("should return the initial state", () => {
    const expected = {title: 'student'};
    const result = currentJob(undefined, {
      type: "SET_CURRENT_JOB",
      job: expected
    });
    expect(result).toEqual(expected);
  });

  it("should return the initial state", () => {
    const expected = {};
    const result = currentJob(undefined, {});
    expect(result).toEqual(expected);
  });

})