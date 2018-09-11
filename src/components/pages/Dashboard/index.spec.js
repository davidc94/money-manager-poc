import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './index';

configure({ adapter: new Adapter() });

describe('dashboard', () => {
  const render = shallow(<Dashboard />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
