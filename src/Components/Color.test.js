import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color', () => {
  it('renders', () => {
    const match = {
      params: {
        color: 'purple'
      }
    };
    const wrapper = shallow(<Color match={match} />);
    expect(wrapper).toMatchSnapshot();
  });
});
