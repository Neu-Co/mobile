import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import LoginScreen from '../screens/loginScreen';
import LoadingScreen from '../screens/loadingScreen';

// Navigator
import BottomNavigator from './bottomNavigator';


const AuthStack = createStackNavigator(
    { 
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