import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    console.log(this.props.navigation.navigate.backgroundColor)
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
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Balance') {
          iconName = 'bank';
        } else if (routeName === 'Spent') {
          iconName = 'currency-usd';
        } else if (routeName === 'Income') {
          iconName = 'cash-100';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#999',
      style: {
        backgroundColor: '#e9e9ee',
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
        borderBottomWidth: 0,
        paddingTop: 10,
      },
      labelStyle: {
        fontSize: 14,
      },
      indicatorStyle: {
        height: 0,
      },
    },
  });
