import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import LoginScreen from '../screens/loginScreen';
import LoadingScreen from '../screens/loadingScreen';
import RegisterScreen from '../screens/registerScreen';
import NewOfferScreen from '../screens/newOfferScreen';

// Navigator
import BottomNavigator from './bottomNavigator';
import ProfileScreen from '../screens/profileScreen';
import { HomeScreen } from '../screens/homeScreen';


const AuthStack = createStackNavigator(
    {
        register: RegisterScreen,
        login: LoginScreen
    },
    {
        headerMode: 'none'
    });

const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: BottomNavigator,
        AuthLoading: LoadingScreen
    },
    {
        initialRouteName: 'App'
    }
)

export default createAppContainer(SwitchNavigator);