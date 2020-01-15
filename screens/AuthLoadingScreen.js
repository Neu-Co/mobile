import React from 'react';

import { StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';

import { getToken } from  '../actions/token';

import { connect } from 'react-redux';

class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const token = await this.props.getToken();
        this.props.navigation.navigate(token ? 'App' : 'Auth');
    };

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle="default" />
                <ActivityIndicator color="#00839A" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    getToken: (...args) => dispatch(getToken(...args))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);