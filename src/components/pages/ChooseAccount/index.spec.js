import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChooseAccount from './index';

configure({ adapter: new Adapter() });

describe('choose account', () => {
  const render = shallow(<ChooseAccount />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
