import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Consent from './index';

configure({ adapter: new Adapter() });

describe('consent', () => {
  const render = shallow(<Consent />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});