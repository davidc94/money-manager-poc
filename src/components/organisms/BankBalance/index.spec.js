import React from 'react';
import { shallow } from 'enzyme';
import BankBalance from './index';

describe('bank balance', () => {
  const render = shallow(<BankBalance />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

});
