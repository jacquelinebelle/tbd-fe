import React from "react";
import { shallow } from "enzyme";
import { JobListing } from "./index";

const mockJob = {
  lastModified: "01/26/2020",
  title: "FrontEnd Engineer",
  link: "randomlink.com",
  location: "Dallas, TX",
  salary: "400000",
  company: "Tronkat Inc.",
  snippet: "This is a random snippet",
  type: "Full Time"
};

describe("Job Listing", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<JobListing {...mockJob} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
