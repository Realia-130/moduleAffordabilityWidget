import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../../client/src/app.jsx';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('Rendering', () => {
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

  // describe('State', () => {
  //   it('Has a homePrice property of type number.', () => {
  //     expect(wrapper.state('homePrice')).toExist();
  //   });
  //   it('Has a homePrice property of type number.', () => {
  //     expect(wrapper.state('payment')).toExist();
  //   });
  // });
});
