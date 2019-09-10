import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<Header />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
