import React from 'react';
import { shallow } from 'enzyme';
import Income from './index';

describe('income', () => {
  const render = shallow(<Income />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

});
