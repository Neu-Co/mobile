import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// SCREENS
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';

const DrawerNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen
    },
    {
        headerMode: 'screen'
    }
);

export default createAppContainer(DrawerNavigator);