import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import LoginScreen from '../screens/loginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import RegisterScreen from '../screens/registerScreen';
import profileScreen from '../screens/profileScreen';

// Navigator
import BottomNavigator from './bottomNavigator';


const AuthStack = createStackNavigator(
    { 
        login: LoginScreen,
        register: RegisterScreen
    },
    {
        headerMode: 'none'
    });

const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: BottomNavigator,
        AuthLoading: AuthLoadingScreen
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

export default createAppContainer(SwitchNavigator);