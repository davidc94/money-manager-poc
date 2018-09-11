import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Income from './index';

configure({ adapter: new Adapter() });

describe('income', () => {
  const render = shallow(<Income />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
