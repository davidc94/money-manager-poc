import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChooseBank from './index';

configure({ adapter: new Adapter() });

describe('choose bank', () => {
  const render = shallow(<ChooseBank />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});