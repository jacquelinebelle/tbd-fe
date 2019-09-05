import React from 'react';
import {shallow} from 'enzyme';
import Form from './index'

describe("Form", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(
      <Form />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('state should start with empty strings as default', () => {
    expect(wrapper.state().keywords).toBe('')
    expect(wrapper.state().location).toBe('')
    expect(wrapper.state().radius).toBe('')
    expect(wrapper.state().salary).toBe('')
  })

  it('should update state when user types in form fields', () => {
    wrapper.instance().handleChange = jest.fn();
    let newValue = 'Hi';
    wrapper.find("form").simulate("change", {
      target: {name: "keywords", value: newValue}
    })
    expect(wrapper.state().keywords).toEqual(newValue)
  })

  it('should update state when user types in form fields', () => {
    wrapper.instance().handleChange = jest.fn();
    let newValue = '100000';
    wrapper.find("form").simulate("change", {
      target: {name: "salary", value: newValue}
    })
    expect(wrapper.state().salary).toEqual(newValue)
  })

  it('should update state when user types in form fields', () => {
    wrapper.instance().handleChange = jest.fn();
    let newValue = 'Dallas, TX';
    wrapper.find("form").simulate("change", {
      target: {name: "location", value: newValue}
    })
    expect(wrapper.state().location).toEqual(newValue)
  })

  it('should update state when user types in form fields', () => {
    wrapper.instance().handleChange = jest.fn();
    let newValue = 2;
    wrapper.find("form").simulate("change", {
      target: {name: "radius", value: newValue}
    })
    expect(wrapper.state().radius).toEqual(newValue)
  })
})