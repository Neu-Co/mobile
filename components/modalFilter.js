import React from 'react';
import { StyleSheet, TouchableOpacity, Modal, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import Autocomplete from 'react-native-autocomplete-input';
import InputCity from '../components/inputCity';
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
                            <InputCity placeholder="Départ" containerStyle={styles.autocompleteTop} />
                            <InputCity placeholder="Arrivée" containerStyle={styles.autocompleteBottom} />
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
    autocompleteTop: {
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
        padding: 3,
        backgroundColor: '#FFFFFF'
    },
    autocompleteBottom: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 60,
        zIndex: 1,
        borderWidth: 1,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
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