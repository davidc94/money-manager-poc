import { createSwitchNavigator } from 'react-navigation';
import Login from './components/pages/Login';
import Setup from './components/pages/Setup';
import ChooseBank from './components/pages/ChooseBank';
import Consent from './components/pages/Consent';
import ChooseAccount from './components/pages/ChooseAccount';
import Dashboard from './components/pages/Dashboard';

export default createSwitchNavigator(
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
