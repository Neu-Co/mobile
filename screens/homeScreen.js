import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// COMPONENTS
import CustomHeader from '../components/header';

import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class HomeScreen extends React.Component {

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
        console.log(this.props);
        return(
            <View>
                <CustomHeader navigation={ this.props.navigation } title="Home" />
                <ImageBackground
                    source={require('../image/home.jpg')}
                    style={{ width: '100%', height: '100%'}}>
                    <Text style={styles.title}>Et vous quelle est votre prochaine destination ?</Text>
                    <Text style={styles.text}>Le covoiturage Calédonien c'est maintenant : Choisissez le trajet qui vous convient le mieux.</Text>
                    <TouchableOpacity style={styles.btnProp}>
                        <Text style={styles.btnTextProp}>Proposer un trajet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSearch}>
                        <Text style={styles.btnTextSearch}>Rechercher un trajet</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
  }

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
        marginTop: 300,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    
    text: {
        marginBottom: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    
    btnProp: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        marginRight: 20,
        marginBottom: 15,
        marginLeft: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#1aa3ff',
    },
    
    btnSearch: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        marginRight: 20,
        marginBottom: 15,
        marginLeft: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
    },
    
    btnTextProp: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    
    btnTextSearch: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
  });
  