import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import StyledView from '../../atoms/StyledView';
import BankBalance from '../../organisms/BankBalance';
import SpentSoFar from '../../organisms/SpentSoFar';
import Income from '../../organisms/Income';
import { FETCH_BANK_BALANCE, FETCH_SPENDING, FETCH_INCOME_DATA } from '../../../store/constants';

class Dashboard extends PureComponent {
  componentDidMount() {
    StatusBar.setBackgroundColor('#000000');
    this.props.dispatch({ type: FETCH_BANK_BALANCE });
    this.props.dispatch({ type: FETCH_SPENDING });
    this.props.dispatch({ type: FETCH_INCOME_DATA });
  }

  render() {
    return (
      <StyledView>
        <StatusBar
          barStyle="dark-content"
        />
        <TabNav />
      </StyledView>
    );
  }
}

export default connect()(Dashboard);

export const TabNav = createBottomTabNavigator({
  Balance: { screen: BankBalance },
  Spent: { screen: SpentSoFar },
  Income: { screen: Income },
},
{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#999',
    style: {
      backgroundColor: '#fff',
      borderTopColor: 'grey',
      borderTopWidth: 0.5,
    },
    labelStyle: {
      fontSize: 20,
    },
    indicatorStyle: {
      height: 0,
    },
  },
});
