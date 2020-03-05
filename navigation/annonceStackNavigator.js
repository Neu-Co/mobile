import { createStackNavigator } from 'react-navigation-stack';
import ListAnnonceScreen from '../screens/ListAnnonceScreen';
import AnnonceScreen from '../screens/AnnonceScreen';

export default AnnonceStack = createStackNavigator({
        Annonces: ListAnnonceScreen,
        Annonce: AnnonceScreen
    },
    {
        initialRouteName: 'Annonces',
        headerMode: 'none'
    }
)