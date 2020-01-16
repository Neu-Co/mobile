import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';

// SCREENS
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import LoginScreen from '../screens/loginScreen';
import TripScreen from '../screens/tripScreen'

const BottomNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
        Login: LoginScreen,
        myTrips: TripScreen
    },
    {
        headerMode: 'screen',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
      
              const { routeName } = navigation.state;
              let IconComponent = Ionicons;
              let iconHome;
              let iconProfile;
              let iconLogin;
      
              if ( routeName === 'Home' ) {
                iconHome = `bank`;
                iconProfile = `bank`;
                iconLogin = `bank`;
              } else if ( routeName === 'Profile' ) {
                iconHome = `aliwangwang-o1`;
                iconProfile = `aliwangwang-o1`;
                iconLogin = `aliwangwang-o1`;
             
              } else if ( routeName === 'Login' ) {
                iconHome = `API`;
                iconLogin = `API`;
                iconLogin = `API`;
              }
      
              return (
                <IconComponent name={iconHome} size={25} color={tintColor} />,
                <IconComponent name={iconProfile} size={25} color={tintColor} />,
                <IconComponent name={iconLogin} size={25} color={tintColor} />
              );
            },
        }),

        tabBarOptions: {
            activeTintColor: '#1aa3ff',
            inactiveTintColor: 'gray',
            activeBackgroundColor:'pink',
            tabStyle: {
              borderWidth: 0.5,
              paddingTop: 6,
            },
          },


    }
);

export default createAppContainer(BottomNavigator);