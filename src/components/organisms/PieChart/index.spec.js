import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PieChart from './index';

configure({ adapter: new Adapter() });

describe('pie chart', () => {
  const render = shallow(<PieChart />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
