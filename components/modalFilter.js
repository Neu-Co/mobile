import React from 'react';
import { StyleSheet, TouchableOpacity, Modal, View } from 'react-native';
import { Header, Text, Icon, Input } from 'react-native-elements';
import Autocomplete from 'react-native-autocomplete-input';
import data from '../data/cities.json';

export default class ModalFilter extends React.Component {

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
        const { isVisible } = this.props;
        const { query } = this.state;
        const cities = this.findCity(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return(
            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.container}>
                        <View style={styles.modalHeader}>
                            <Text style={{ color: '#FFFFFF' }} >Filter</Text>
                            <TouchableOpacity onPress={this.onClose}>
                                <Icon name='x' type='feather' color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalBody}>
                            <Autocomplete
                                autoCapitalize="none"
                                autoCorrect={false}
                                defaultValue={query}
                                keyExtractor={(item, index) => index.toString()}
                                containerStyle={styles.autocompleteContainer}
                                data={cities.length === 1 && comp(query, cities[0].name) ? [] : cities}
                                onChangeText={text => this.setState({ query: text })}
                                placeholder="Départ"
                                inputContainerStyle={styles.searchInput}
                                listStyle={{ borderWidth: 0 }}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.itemCity} onPress={() => this.setState({ query: item.name })}>
                                        <Text style={styles.itemText}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )

    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        paddingTop: 100,
        paddingStart: 30,
        paddingEnd: 30,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    container: {
        backgroundColor: '#FFFFFF',
        height: 300
    },
    modalHeader: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2089dc',
        paddingStart: 10,
        paddingEnd: 10,
        width: '100%'
    },
    modalBody: {
        flex: 1,
        marginStart: 20,
        marginEnd: 20
    },
    searchInput: {
        borderWidth: 0,
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 10,
        zIndex: 2,
        borderWidth: 1,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderColor: '#2089dc',
        padding: 3
    },
    itemText: {
        fontSize: 15,
        flex: 1
    },
    itemCity: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 10
    }
  });