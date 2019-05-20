import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header', () => {
  it('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
