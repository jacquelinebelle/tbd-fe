import React from "react";
import { shallow } from "enzyme";
import { CitiesPage } from "./CitiesPage";

describe('Cities Page', () => {
let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CitiesPage />)
  })
  it("SHould match the snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
