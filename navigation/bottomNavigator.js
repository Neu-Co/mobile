import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// SCREENS
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';

const BottomNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
    },
    {
        headerMode: 'screen'
    }
);

export default createAppContainer(BottomNavigator);