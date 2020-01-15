import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import LoginScreen from '../screens/loginScreen';
import LoadingScreen from '../screens/loadingScreen';
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
        AuthLoading: LoadingScreen
    },
    {
        initialRouteName: 'Auth'
    }
)

export default createAppContainer(SwitchNavigator);