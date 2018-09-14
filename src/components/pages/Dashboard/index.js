import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import StyledView from '../../atoms/StyledView';
import BankBalance from '../../organisms/BankBalance';
import SpentSoFar from '../../organisms/SpentSoFar';
import Income from '../../organisms/Income';

export default class Dashboard extends PureComponent {
  componentDidMount() {
    StatusBar.setBackgroundColor('#000000');
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

export const TabNav = createBottomTabNavigator({
  BankBalance: { screen: BankBalance },
  SpentSoFar: { screen: SpentSoFar },
  Income: { screen: Income },
});
