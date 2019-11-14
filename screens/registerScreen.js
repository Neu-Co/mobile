import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Image } from 'react-native-elements';

import {registerUser} from '../actions/user';

// COMPONENTS
import CustomHeader from '../components/header';

import { connect } from 'react-redux';

export class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: '',
            email: '',
            phone: '',
            password: '',
            cpassword: ''
        }
    }

    handleSubmit = () => {
        const { username, email, phone, password, cpassword } = this.state;
        this.setState({ isLoading: true}, async () => {
            const success = await this.props.registerUser(username, email, phone, password, cpassword);
            console.log(success);
            if(success) this.props.navigation.navigate('App');
            else alert('Incomplete register');
        })
    }

    render() {
        return(
            <View>
                <CustomHeader navigation={ this.props.navigation } title="Register" />
                <Input
                        onChangeText={ (username) => this.setState({username}) }
                        inputContainerStyle={styles.input}
                        placeholder='Nom de compte'
                        rightIcon={
                            <Icon name='user' size={32} color='#2089DC' />
                        }
                    />
                    <Input
                        onChangeText={ (email) => this.setState({email}) }
                        inputContainerStyle={styles.input}
                        placeholder='Adresse Mail'
                        rightIcon={
                            <Icon name='envelope' size={24} color='#2089DC' />
                        }
                    />
                                        <Input
                        onChangeText={ (phone) => this.setState({phone}) }
                        inputContainerStyle={styles.input}
                        placeholder='Numéro de téléphone'
                        rightIcon={
                            <Icon name='phone' size={24} color='#2089DC' />
                        }
                    />
                    <Input
                        onChangeText={ (password) => this.setState({password}) }
                        inputContainerStyle={styles.input}
                        placeholder='Mot de passe'
                        secureTextEntry={true}
                        rightIcon={
                            <Icon name='lock' size={32} color='#2089DC' />
                        }
                    />
                                        <Input
                        onChangeText={ (cpassword) => this.setState({cpassword}) }
                        inputContainerStyle={styles.input}
                        placeholder='Confirmer le mot de passe'
                        secureTextEntry={true}
                        rightIcon={
                            <Icon name='lock' size={32} color='#2089DC' />
                        }
                    />
                    <View style={styles.buttons}>
                        <Button title="S'inscrire" onPress={this.handleSubmit} />
                    </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
  }

const mapDispatchToProps = dispatch => ({
    registerUser: (...args) => dispatch(registerUser(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  