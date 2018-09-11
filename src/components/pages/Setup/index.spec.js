import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Setup from './index';

configure({ adapter: new Adapter() });

describe('setup', () => {
  const render = shallow(<Setup />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});