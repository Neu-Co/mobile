import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// NAVIGATORS
import DrawerNavigator from './drawerNavigator';

const SwitchNavigator = createSwitchNavigator(
    {
        App: DrawerNavigator
    },
    {
        initialRouteName: 'App'
    }
)

export default createAppContainer(SwitchNavigator);