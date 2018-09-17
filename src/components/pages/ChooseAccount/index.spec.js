import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import ChooseAccount from './';

configure({ adapter: new Adapter() });

describe('choose account', () => {
  const wrapper = shallow(<ChooseAccount />);
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Selecting first item and navigate to next screen', () => {
    const navigation = { navigate: jest.fn() };
    const testrenderer = TestRenderer.create(<ChooseAccount navigation={navigation} />);
    const testinstance = testrenderer.root;

    testinstance.findAllByProps({ 'data-test': 'account-list-item' })[0].props.onPress();
    expect(testinstance.findByProps({ 'data-test': 'nextButton' }).props.disabled).toBe(false);

    testinstance.findByProps({ 'data-test': 'nextButton' }).props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith('Dashboard');
  });
});
