import React from 'react';
import {shallow} from 'enzyme';
import App from './App';


describe('App', () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(
      <App />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

