import React from 'react';
import { View, Text } from 'react-native';

export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <Text>
                    LoadingScreen
                </Text>
            </View>
        )
    }
}