import * as actions from "./index";

describe("actions", () => {
  it("should have a type of GATHER_JOBS", () => {
    const jobsData = ["job1", "job2"];
    const expectedAction = {
      type: "GATHER_JOBS",
      jobs: jobsData
    };
    const result = actions.gatherJobs(jobsData);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of GATHER_CITIES", () => {
    const citiesData = ["city1", "city2"];
    const expectedAction = {
      type: "GATHER_CITIES",
      cities: citiesData
    };
    const result = actions.gatherCities(citiesData);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of IS_LOADING", () => {
    const boolData = true;
    const expectedAction = {
      type: "IS_LOADING",
      bool: boolData
    };
    const result = actions.isLoading(boolData);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of GATHER_CITIES", () => {
    const messageData = "An Error has Occured";
    const expectedAction = {
      type: "GOT_ERROR",
      message: messageData
    };
    const result = actions.gotError(messageData);
    expect(result).toEqual(expectedAction);
  });
});
