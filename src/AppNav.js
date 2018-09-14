import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from './components/pages/Login';
import Setup from './components/pages/Setup';
import ChooseBank from './components/pages/ChooseBank';
import Consent from './components/pages/Consent';
import ChooseAccount from './components/pages/ChooseAccount';
import Dashboard from './components/pages/Dashboard';

export const switchNav = createSwitchNavigator(
  {
    Login: { screen: Login },
    Setup: { screen: Setup },
    ChooseBank: { screen: ChooseBank },
    Consent: { screen: Consent },
    ChooseAccount: { screen: ChooseAccount },
    Dashboard: { screen: Dashboard },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createStackNavigator(
  {
    switchNav,
  },
  {
    navigationOptions: {
      title: 'gameplan Money Manager',
      headerTintColor: '#ffffff',
      barStyle: 'light-content',
      headerStyle: {
        backgroundColor: '#000000',
        height: 25,
      },
    },
  },
);
