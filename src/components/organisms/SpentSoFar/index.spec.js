import React from 'react';
import { shallow } from 'enzyme';
import SpentSoFar from './index';

describe('spent so far', () => {
  const render = shallow(<SpentSoFar />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

});
