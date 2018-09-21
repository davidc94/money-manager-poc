import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import StyledView from '../../atoms/StyledView';
import BankBalance from '../../organisms/BankBalance';
import SpentSoFar from '../../organisms/SpentSoFar';
import Income from '../../organisms/Income';
import { FETCH_BANK_BALANCE, FETCH_SPENDING } from '../../../store/constants';

class Dashboard extends PureComponent {

  componentDidMount() {
    StatusBar.setBackgroundColor('#000000');
    this.props.dispatch({ type: FETCH_BANK_BALANCE });
    this.props.dispatch({ type: FETCH_SPENDING });
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
  BankBalance: { screen: BankBalance },
  SpentSoFar: { screen: SpentSoFar },
  Income: { screen: Income },
});
