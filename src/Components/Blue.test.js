import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';

describe('Blue', () => {
  it('renders', () => {
    const wrapper = shallow(<Blue />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
