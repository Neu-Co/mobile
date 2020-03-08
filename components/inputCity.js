import React from 'react';
import { StyleSheet, TouchableOpacity, Modal, View } from 'react-native';
import { Header, Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Autocomplete from 'react-native-autocomplete-input';
import data from '../data/cities.json';

export default class InputCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: data,
            city: '',
            query: '',
            found: true
        }
    }

    onClose = () => {
        this.props.onClose(false);
    }

    remove

    findCity = (query) => {
        if (query === '') {
          return [];
        }
        const { cities } = this.state;
        
        query.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if(cities.filter(city => city.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === query.toLowerCase().trim() ).length > 0 ) {
            console.log('ok');
        }

        //return (cities.filter(city => city.name.search(regex) >= 0).length > 0);

    }

    render() {
        const { query } = this.state;
        const cities = this.findCity(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        const { containerStyle, placeholder, iconName } = this.props;
        return(
            <Input
                onChangeText={this.findCity}
                inputStyle={styles.searchInput} 
                placeholder={placeholder}
                inputContainerStyle={styles.containerInput}
                leftIconContainerStyle={{marginLeft: 0}}
                leftIcon={
                    <Icon 
                        name={iconName}
                        size={24}
                        color='#2089DC'
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 0,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10
    },
    itemText: {
        fontSize: 15,
        flex: 1
    },
    itemCity: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 10,
        zIndex: 2
    },
    containerInput: {
        justifyContent: 'space-between',
        borderColor:'#2089DC',
        paddingLeft: 0
    }
  });