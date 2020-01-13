import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Image } from 'react-native-elements';

// Components
import CustomHeader from '../components/header';

export class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: '',
            password: ''
        }
    }

    handleSubmit = () => {
        const { username, password } = this.state;
        this.setState({ isLoading: true}, async () => {
            const success = await this.props.loginUser(username, password);
            if(success) this.props.navigation.navigate('App');
            else alert('Bad Credentials');
        })
    }

    render() {
        return(
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <CustomHeader navigation={ this.props.navigation } title="Login" />
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{width: 150, height: 150 }}
                    />
                </View>
                <View style={styles.form}>
                    <Input
                        onChangeText={ (username) => this.setState({username}) }
                        inputContainerStyle={styles.input}
                        placeholder='Username'
                        rightIcon={
                            <Icon name='envelope' size={24} color='#2089DC' />
                        }
                    />
                    <Input
                        onChangeText={ (password) => this.setState({password}) }
                        inputContainerStyle={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        rightIcon={
                            <Icon name='lock' size={32} color='#2089DC' />
                        }
                    />
                    <View style={styles.buttons}>
                        <Button title="Login" onPress={this.handleSubmit} />
                        <Button buttonStyle={styles.register} title="Register" onPress={ () => this.props.navigation.navigate('register')} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    buttons: {
        padding: 10
    },
    register: {
        backgroundColor: '#5cb85c', 
        marginTop: 10
    },
    input: {
        borderColor:'#2089DC'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        width:250,
        borderRadius:30,
        backgroundColor: "#00839A",
      },
    header: {
        backgroundColor: '#00839A',
        height: 100
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf:'center',
        position: 'absolute',
        marginTop: 35
    },
    text: {
        overflow: 'hidden',
        fontWeight: 'bold'
    },
    body:{
        flex: 1,
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600",
        marginStart: 5,
        flexWrap: 'wrap'
    },
    info: {
        fontSize:16,
        color: "#00839A",
        marginTop:10
    },
    separator: {
        marginStart: 15,
        marginEnd: 15,
        marginTop: 15,
        height: 5,
        width: 200,
        borderTopWidth: 2,
        borderTopColor: '#d6d7da',
        marginBottom: 15
    }
});

/*-------- Redux --------*/

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
  }

const mapDispatchToProps = dispatch => ({
    loginUser: (...args) => dispatch(loginUser(...args)),
});

// Connect to the Store redux
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

