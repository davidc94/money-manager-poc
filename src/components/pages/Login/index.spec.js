import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './index';

configure({ adapter: new Adapter() });

describe('login', () => {
  const render = shallow(<Login />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});