import React from "react";
import { shallow } from "enzyme";
import { ResultsPage, mapDispatchToProps, mapStateToProps } from "./index";

const mockJobs = [
  {
    title: "JavaScript Developer",
    location: "Mesa, AZ",
    snippet: "Sample snippet 1",
    salary: "",
    source: "Careerbuilder.com",
    type: "Full-time",
    link:
      "https://us.jooble.org/away/2489493276763186316?p=1&pos=1&cid=512&ckey=Javascript&age=134&relb=175&brelb=115&scr=7278,57184782609&bscr=4783,0615&aq=19401826",
    company: "IQVIA",
    updated: "2019-09-04T03:13:55.1458976+03:00",
    id: 2489493276763186000
  },
  {
    title: "JavaScript Developer",
    location: "Durham, NC",
    snippet: "Sample snippet 2",
    salary: "",
    source: "Careerbuilder.com",
    type: "Full-time",
    link:
      "https://us.jooble.org/away/-2476942630518357134?p=1&pos=2&cid=512&ckey=Javascript&age=105&relb=175&brelb=115&scr=7240,01630434783&bscr=4757,725&aq=19401826",
    company: "Vaco Technology",
    updated: "2019-09-05T08:01:17.9188044+03:00",
    id: 2476942630518357000
  }
];

const mockCities = [
  {
    city: "Name 1",
    web: "randomsite1.com",
    categories: [
      { score_out_of_10: 6 },
      { score_out_of_10: 5 },
      { score_out_of_10: 6 },
      { score_out_of_10: 4 },
      { score_out_of_10: 3 },
      { score_out_of_10: 2 },
      { score_out_of_10: 4 },
      { score_out_of_10: 5 },
      { score_out_of_10: 6 },
      { score_out_of_10: 5 },
      { score_out_of_10: 4 },
      { score_out_of_10: 3 },
      { score_out_of_10: 2 },
      { score_out_of_10: 3 },
      { score_out_of_10: 7 },
      { score_out_of_10: 4 }
    ],
    teleport_city_score: 99
  },
  {
    city: "Name 2",
    web: "randomsite2.com",
    categories: [
      { score_out_of_10: 3 },
      { score_out_of_10: 7 },
      { score_out_of_10: 6 },
      { score_out_of_10: 7 },
      { score_out_of_10: 8 },
      { score_out_of_10: 3 },
      { score_out_of_10: 1 },
      { score_out_of_10: 8 },
      { score_out_of_10: 4 },
      { score_out_of_10: 5 },
      { score_out_of_10: 4 },
      { score_out_of_10: 9 },
      { score_out_of_10: 5 },
      { score_out_of_10: 8 },
      { score_out_of_10: 7 },
      { score_out_of_10: 1 }
    ],
    teleport_city_score: 19
  },
  {
    city: "Name 3",
    web: "randomsite3.com",
    categories: [
      { score_out_of_10: 9 },
      { score_out_of_10: 9 },
      { score_out_of_10: 5 },
      { score_out_of_10: 3 },
      { score_out_of_10: 2 },
      { score_out_of_10: 6 },
      { score_out_of_10: 4 },
      { score_out_of_10: 5 },
      { score_out_of_10: 9 },
      { score_out_of_10: 2 },
      { score_out_of_10: 4 },
      { score_out_of_10: 6 },
      { score_out_of_10: 8 },
      { score_out_of_10: 9 },
      { score_out_of_10: 4 },
      { score_out_of_10: 6 }
    ],
    teleport_city_score: 59
  }
];

const mockCity = mockCities[2];

const mockState = {
  jobs: mockJobs,
  cities: mockCities,
  loading: false,
  error: ""
};

describe("Results Page", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<ResultsPage jobs={mockJobs} cities={mockCities} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return an array when displayJobs", () => {
    expect(wrapper.instance().displayJobs()).toHaveLength(2);
  });

  it("should return an array when displayJobs", () => {
    expect(wrapper.instance().displayCities()).toHaveLength(3);
  });

  it("should return nothing if no city from getRank", () => {
    expect(wrapper.instance().getRank()).toEqual(undefined);
  });

  it("should return rank of city from getRank", () => {
    expect(wrapper.instance().getRank(mockCity)).toEqual("2/3");
  });

  it("should return an array of cities", () => {
    expect(wrapper.instance().getCities(mockJobs)).toEqual([
      "Mesa, AZ",
      "Durham, NC"
    ]);
  });

  describe("mapDispatchToProps", () => {
    it("should call scoreThunk when dispatch", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.scoreThunk(mockCities);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("mapStateToProps", () => {
    it("should reflect whats in the redux store", () => {
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
    });
  });
});
