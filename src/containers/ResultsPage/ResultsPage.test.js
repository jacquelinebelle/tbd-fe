import React from 'react';
import {shallow} from 'enzyme';
import {ResultsPage} from './index';


describe('Results Page', () => {

  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(
      <ResultsPage />
    )

  })


  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })
})