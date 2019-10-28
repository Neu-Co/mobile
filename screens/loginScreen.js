import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

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

    }

    render() {
        return(
            <View>
                <CustomHeader navigation={ this.props.navigation } title="Login" />
                <Text>
                    Login Screen
                </Text>
            </View>
        )
    }
}

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

