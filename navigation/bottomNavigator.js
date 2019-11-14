import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// SCREENS
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';

const BottomNavigator = createBottomTabNavigator(
    {
        profile: ProfileScreen,
        Home: HomeScreen,
    },
    {
        headerMode: 'screen'
    }
);

export default createAppContainer(BottomNavigator);