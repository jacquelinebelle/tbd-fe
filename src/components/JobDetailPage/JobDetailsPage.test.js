import React from "react";
import { shallow } from "enzyme";
import { JobDetailPage, mapDispatchToProps, mapStateToProps } from "./index";
import mockJobs from '../../mockData/mockJobs';
import mockCities from '../../mockData/mockCities';

const mockCity = mockCities[0]

describe("Job Details Page", () => {
  let wrapper;
  let mockState;

  beforeEach(function(){
    mockState = {
      jobs: mockJobs,
      currentCity: mockCity
    };
    wrapper = shallow(
      <JobDetailPage jobs={mockJobs} 
      currentCity={mockCity}
      id={2489493276763186000}/>
    )
  })
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot', () => {
    const mockState = {
      currJob: {},
      cityDetails: [],
      scores: false,
      details: false,
      showSalaries:false,
      shownDetail: ''
  }
    expect(wrapper.state()).toMatchSnapshot(mockState);
  })

  it('should update state with handleState on click of section', () => {
    wrapper.find('.detail-city-more').at(0).simulate('click')
    setTimeout(function(){ expect(wrapper.state().scores).toEqual(true) }, 1000);
  })

  it('should update state with handleState on click of section', () => {
    wrapper.find('.detail-city-more').at(1).simulate('click')
    setTimeout(function(){ expect(wrapper.state().showSalaries).toEqual(true) }, 1000);
  })

  it('should update state with handleState on click of section', () => {
    wrapper.find('.detail-title').at(2).simulate('click')
    setTimeout(function(){ expect(wrapper.state().details).toEqual(true) }, 1000);
  })

  describe("mapDispatchToProps", () => {
    it("should call scoreThunk when dispatch", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.cityThunk(mockCity);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("mapStateToProps", () => {
    it("should reflect whats in the redux store", () => {
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
    });
  });
})