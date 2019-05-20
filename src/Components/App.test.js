import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('app', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
