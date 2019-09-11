import React from 'react';
import {shallow} from 'enzyme';
import {Form, mapDispatchToProps} from './index';
import { jobsThunk } from '../../thunks/jobsThunk';


describe("Form", () => {
  let wrapper;
  let mockJobsThunk; 

  beforeEach(function() {
    mockJobsThunk = jest.fn()
    wrapper = shallow(
      <Form jobsThunk={mockJobsThunk}/>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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

  describe('mapDispathToProps', () => {
    it('should call JobThunk when dispatch', () => {
      const mockDispatch = jest.fn();
      const mockState = {keywords: 'developer'}
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.gatherJobs(mockState)
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})



