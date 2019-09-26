import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// SCREENS
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen
    },
    {
        headerMode: 'screen'
    }
);

export default createAppContainer(DrawerNavigator);