import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// COMPONENTS
import CustomHeader from '../components/header';

import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class NewOfferScreen extends React.Component {

    static navigationOptions = {
        title: 'Offre',
        drawerLabel: 'Offre',
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
        console.log(this.props);
        return(
            <View>
                <CustomHeader navigation={ this.props.navigation } title="Offre" />
                <Text style={styles.title}>Proposer un Trajet</Text>
                <Text style={styles.date}>Date Départ</Text>
                <Text style={styles.hour}>Heure Départ</Text>
                <Text style={styles.spot}>Nombres de places</Text>
                <Text style={styles.price}>Prix</Text>
                <Button title="S'inscrire" onPress={this.handleSubmit} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
  }

export default connect(mapStateToProps)(NewOfferScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        textShadowColor: '#fff',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },

    date: {
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000',
    },

    hour: {
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000',
    },
    
    spot: {
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000',
    },
    
    price: {
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000',
    },
  });
  