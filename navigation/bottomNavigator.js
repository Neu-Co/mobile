import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// SCREENS
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import AnnonceStack from './annonceStackNavigator';

const BottomNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
        Annonces: AnnonceStack,
    },
    {
        headerMode: 'screen',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
      
              const { routeName } = navigation.state;
              let iconName;
      
              if ( routeName === 'Home' ) {
                iconName = 'md-home';
              }
              if( routeName === 'Profile') {
                iconName = 'md-contact';
              }
              if( routeName === 'Annonces') {
                iconName = 'md-car';
              }
      
              return (
                <Ionicons name={iconName} size={25} color={tintColor} />
              );
            },
        }),
        tabBarOptions: {
            activeTintColor: '#1aa3ff',
            inactiveTintColor: '#2089dc',
            activeBackgroundColor:'#b3e0ff',
            tabStyle: {
              paddingTop: 6,
            },
            showLabel: false
          },
    }
);

export default createAppContainer(BottomNavigator);