import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './index';

describe("Login", () => {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(
      <Login />
    )
  }) 
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

});
