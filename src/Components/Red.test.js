import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Red', () => {
  it('renders', () => {
    const wrapper = shallow(<Red />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
