import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';

// SCREENS
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import LoginScreen from '../screens/loginScreen';
import NewOfferScreen from '../screens/newOfferScreen';

const BottomNavigator = createBottomTabNavigator(
    {
      NewOffer: NewOfferScreen,
      Home: HomeScreen,
      Profile: ProfileScreen,
      Login: LoginScreen,
        
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
                iconLProfile = `API`;
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