import React from 'react';
import { shallow } from 'enzyme';
import { JobListing } from './index';

describe('Job Listing', () => {

  let wrapper;
  beforeEach(()=> {
    wrapper= shallow(
      <JobListing jobs={}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})