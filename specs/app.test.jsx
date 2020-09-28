import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/app.jsx';

describe('App testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders Header component.', () => {
    expect(wrapper.find('Header')).toExist();
  });

  it('Renders Controls component.', () => {
    expect(wrapper.find('Controls')).toExist();
  });

  it('Renders Display component.', () => {
    expect(wrapper.find('Display')).toExist();
  });
});
