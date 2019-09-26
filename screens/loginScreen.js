import React from 'react';
import { View, Text } from 'react-native';

// COMPONENTS
import CustomHeader from '../components/header';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <CustomHeader navigation={ this.props.navigation } title="Login" />
                <Text>
                    Login Screen
                </Text>
            </View>
        )
    }
}

