import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

// COMPONENTS
import CustomHeader from '../components/header';

export class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
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
    setUser: (...args) => dispatch(setUser(...args)),
});

// Connect to the Store redux
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

