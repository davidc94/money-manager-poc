import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Income from './index';

configure({ adapter: new Adapter() });

describe('income', () => {
  const initialState = {
    income: {
      list: [
        {
          date: 'June 1',
          title: 'Capital Resourcing',
          amount: 1200,
        },
        {
          date: 'June 2',
          title: 'PayPal',
          amount: 110,
        },
      ],
    },
  };
  const initialState_empty = {
    income: {
      list: [],
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);
  const wrapper = shallow(<Income store={store} />);

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('returns null if there is no list', () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = shallow(<Income store={store} />);

    expect(wrapper.find("[data-test='income-wrapper']").length).toBe(0);
  });
});