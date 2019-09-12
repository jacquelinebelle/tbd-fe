import React from "react";
import { shallow } from "enzyme";
import { JobDetailPage } from "./index";
import mockJobs from '../../mockData/mockJobs';
import mockCities from '../../mockData/mockCities';

const mockCity = mockCities[0]

describe("Job Details Page", () => {
  let wrapper;

  beforeEach(function(){
    wrapper = shallow(
      <JobDetailPage jobs={mockJobs} 
      currentCity={mockCity}
      id={2489493276763186000}/>
    )
  })
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})