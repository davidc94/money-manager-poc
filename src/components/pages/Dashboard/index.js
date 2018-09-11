import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import BankBalance from '../../organisms/BankBalance';
import SpentSoFar from '../../organisms/SpentSoFar';
import Income from '../../organisms/Income';

export default class Dashboard extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabNav />
      </View>
    );
  }
}

const TabNav = createBottomTabNavigator({
  BankBalance: { screen: BankBalance },
  SpentSoFar: { screen: SpentSoFar },
  Income: { screen: Income },
});
