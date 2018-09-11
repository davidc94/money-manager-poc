import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BankBalance from './index';

configure({ adapter: new Adapter() });

describe('bank balance', () => {
  const render = shallow(<BankBalance />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
