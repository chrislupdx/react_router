import React from 'react';
import { shallow } from 'enzyme';
import Yellow from './Yellow';

describe('Yellow', () => {
  it('renders', () => {
    const wrapper = shallow(<Yellow />);
    expect(wrapper).toMatchSnapshot();
  });
});
