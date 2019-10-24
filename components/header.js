import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const MenuButton = ({ navigation }) => (
    <TouchableOpacity  onPress={ () => { navigation.toggleDrawer() }}>
        <Ionicons
            name="md-menu"
            color="white"
            size={32}
        />
    </TouchableOpacity>
);

const MenuTitle = ({ title }) => (
    <Text style={ styles.header } > { title } </Text>
);

export default class CustomHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        nav = this.props.navigation;
        return(
            <Header 
                centerComponent = { <MenuTitle title = { this.props.title } /> }
                rightComponent = { <MenuButton navigation={ nav } /> }
            />
        )

    }
}

const styles = StyleSheet.create({
    header: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });