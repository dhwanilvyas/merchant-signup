import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Signup from './screens/Signup';
import DepositMoney from './screens/DepositMoney';

const AppNavigation = StackNavigator(
  {
    Home: { screen: Home },
    Signup: { screen: Signup },
    DepositMoney: { screen: DepositMoney }
  }
);

export default AppNavigation;
