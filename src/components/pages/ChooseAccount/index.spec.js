import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChooseAccount from './';

configure({ adapter: new Adapter() });

describe('choose account', () => {
  const navigation = { navigate: jest.fn() };
  const render = shallow(<ChooseAccount navigation={navigation} />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('Test select account event', () => {
    render.find('FlatList').first().simulate('press');
    render.find('StyledButton').simulate('press');
    expect(navigation.navigate).toHaveBeenCalledWith('Dashboard');
  });
});
