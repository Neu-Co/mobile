import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import BottomNavigator from './bottomNavigator';
import AuthStack from './authstackNavigator';

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