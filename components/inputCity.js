import React from 'react';
import { StyleSheet, TouchableOpacity, Modal, View } from 'react-native';
import { Header, Text, Icon, Input } from 'react-native-elements';
import Autocomplete from 'react-native-autocomplete-input';
import data from '../data/cities.json';

export default class InputCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: data,
            query: ''
        }
    }

    onClose = () => {
        this.props.onClose(false);
    }

    findCity = (query) => {
        if (query === '') {
          return [];
        }
        const { cities } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return cities.filter(city => city.name.search(regex) >= 0);
    }

    render() {
        const { query } = this.state;
        const cities = this.findCity(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        const { containerStyle, placeholder } = this.props;
        return(
            <Autocomplete
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={query}
                keyExtractor={(item, index) => index.toString()}
                containerStyle={containerStyle}
                data={cities.length === 1 && comp(query, cities[0].name) ? [] : cities}
                onChangeText={text => this.setState({ query: text })}
                placeholder={placeholder}
                inputContainerStyle={styles.searchInput}
                listContainerStyle={{ flex: 1 }}
                listStyle={{ borderWidth: 0, padding: 0, margin: 0 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemCity} onPress={() => this.setState({ query: item.name })}>
                        <Text style={styles.itemText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 0,
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
    }
  });