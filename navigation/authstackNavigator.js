import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';

export default AuthStack = createStackNavigator(
    { 
        login: LoginScreen,
        register: RegisterScreen
    },
    {
        headerMode: 'none'
    }
);