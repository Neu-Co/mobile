import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from '../screens/profileScreen';
import TripScreen from '../screens/tripScreen';

export default ProfileStack = createStackNavigator({
        Profile: ProfileScreen,
        MyTrips: TripScreen
    },
    {
        initialRouteName: 'Profile',
        headerMode: 'none'
    }
)