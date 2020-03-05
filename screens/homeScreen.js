import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Button, Image, Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        return(
            <ImageBackground
                source={require('../image/home.jpg')}
                style={styles.image}>
                <View style={styles.container}>

                    <View style={styles.logoContainer}>
                        <Avatar
                            rounded 
                            source={require('../assets/logo.png')}
                            style={{width: 150, height: 150, borderWidth: 2, borderRadius: 18, borderColor: '#1aa3ff'  }}
                        />
                    </View>

                    <Text style={styles.title}>Et vous quelle est votre prochaine destination ?</Text>
                    <Text style={styles.text}>Le covoiturage Calédonien c'est maintenant : Choisissez le trajet qui vous convient le mieux.</Text>

                    <View style={styles.btnGroup}>
                        <Button
                            title='Proposer un trajet'
                            buttonStyle={styles.btn}
                            icon={{
                                name: 'add',
                                size: 30,
                                color: 'white'
                            }}
                        />
                        <Button
                            title='Rechercher un trajet'
                            buttonStyle={styles.btn}
                            icon={{
                                name: 'search',
                                size: 30,
                                color: 'white'
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('Annonces');
                            }}
                        />
                    </View>
                    
                    
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userToken: state.userToken
    }
  }

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    
    image: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    },
    
    text: {
        marginBottom: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#000'
    },
    
    btn: {
        padding: 10,
        margin: 10,
        backgroundColor: '#1aa3ff',
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

    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
  });
  