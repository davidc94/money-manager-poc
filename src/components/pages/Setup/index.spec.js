import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Setup from './index';
import StyledText from '../../atoms/StyledText';

configure({ adapter: new Adapter() });

describe('setup', () => {
  const render = shallow(<Setup />);
  const styledText = shallow(<StyledText />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  // it('renders three <StyledText> elements', () => {
  //   expect(styledText).toHaveBeenCalledTimes(9);
  // });

  // it('renders one button', () => {
  //   expect(view.find('button').exists());
  // });

});
