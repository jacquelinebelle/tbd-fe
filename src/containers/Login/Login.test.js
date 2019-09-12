import React from "react";
import { shallow } from "enzyme";
import { Login } from "./index";
import { jsxEmptyExpression } from "@babel/types";

describe("Login", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({ email: "", password: "" });
  });

  it("should return state", () => {
    expect(wrapper.instance().login()).toEqual({ email: "", password: "" });
  });

  it("should return state", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { name: "email", value: "turing@school.com" }
      });
    expect(wrapper.state().email).toEqual("turing@school.com");
  });

  it("should return state", () => {
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { name: "password", value: "password" }
      });
    expect(wrapper.state().password).toEqual("password");
  });

  it("should return state", () => {
    wrapper.instance().login = jest.fn()
    wrapper
      .find("button")
      .simulate("click", {
        prevenDefault: jest.fn()
      });
    expect(wrapper.instance().login).toHaveBeenCalled();
  });
});
