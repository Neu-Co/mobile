import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// COMPONENTS
import CustomHeader from '../components/header';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: () => (
            <Ionicons
                name="md-home"
                size={32}
            />
        )
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <CustomHeader navigation={ this.props.navigation } title="Home" />
                <Text>
                    Home Screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  