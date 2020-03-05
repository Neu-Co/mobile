import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { Icon, Button } from "react-native-elements";
import Stars from "react-native-stars";
import { FontAwesome } from "react-native-vector-icons";
import { connect } from 'react-redux';
import { setUserDetails } from '../actions/user';
import { logoutUser } from '../actions/auth';
import CustomHeader from "../components/header";


class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: {}
    };
  }

  componentDidMount = async() => {
    const user = await this.props.setUserDetails(this.props.userToken.userToken);
    this.setState({
      user: user,
      isLoading: false
    })
  }

  handleLogout = async() => {
    const logout = await this.props.logoutUser();
    if(logout) this.props.navigation.navigate('Auth');
  }

  render() {
    const { isLoading, user } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} title="Profile" />
        { isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' />
            <Text>Chargement en cours...</Text>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={require('../assets/profile.jpg')} />
            <View style={styles.body}>
              <Text style={styles.name} > {user.name} </Text>
              <Stars
                default={2.5}
                count={5}
                half={true}
                starSize={40}
                fullStar={
                  <FontAwesome
                    name={"star"}
                    size={32}
                    style={[styles.myStarStyle]}
                  />
                }
                emptyStar={
                  <FontAwesome
                    name={"star-o"}
                    size={32}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
                halfStar={
                  <FontAwesome
                    name={"star-half-empty"}
                    size={32}
                    style={[styles.myStarStyle]}
                  />
                }
              />
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginStart: 30,
                  marginEnd: 30,
                  alignItems: 'center'
                }}
              >
                <Text style={{ textAlign: 'center'}}>
                  Actuellement crevé sur la route qui mene a la plaine de gaiac,
                  pour aller peter un coup de chasse, je me suis arrèter pour boire
                  un coup de sky.
                </Text>
              </View>
              </View>
              <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.action} >
                    <Icon style={styles.icon} type='material' active name="star" />
                    <Text style={styles.icon}>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={ () => this.props.navigation.navigate('MyTrips')}>
                    <Icon style={styles.icon} type='material' active name="send" />
                    <Text style={styles.icon}>Mes annonces</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} >
                    <Icon style={styles.icon} type='material' active name="settings" />
                    <Text style={styles.icon}>Paramètres</Text>
                </TouchableOpacity>
              </View>
              
                <Button
                    icon={
                      <Icon
                        type='antdesign'
                        name="logout"
                        size={15}
                        color="white"
                      />
                    }
                    title="Déconnexion"
                    buttonStyle={{ backgroundColor: '#DC3545' }}
                    containerStyle={{ marginStart: 30, marginEnd: 30, marginBottom: 30 }}
                    onPress={this.handleLogout}
                  />
            </View>
          )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      userToken: state.userToken
  }
}

const mapDispatchToProps = dispatch => ({
  setUserDetails: (...args) => dispatch(setUserDetails(...args)),
  logoutUser: (...args) => dispatch(logoutUser(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  myStarStyle: {
    color: "gold",
    backgroundColor: "transparent"
  },
  myEmptyStarStyle: {
    color: "gold"
  },
  textCenter:{
    paddingLeft:10
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
    backgroundColor: '#2089dc',
    height: 100,
    marginTop: 0,
    paddingTop: 0
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
body: {
    flex: 1,
    alignItems: 'center',
    paddingStart: 30,
    paddingEnd: 30,
    marginTop: 60
},
name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    flexWrap: 'wrap'
},
info: {
    fontSize:16,
    marginTop:10,
    textAlign: 'center'
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
},
actionsContainer: {
  flex: 1,
  flexDirection: 'row',
  marginTop: 30,
  marginBottom: 5,
  justifyContent: 'center',
  alignItems: 'center'
},
action: {
  flex: 1, 
  alignItems: 'center'
},
icon: {
  marginBottom: 5
},
});
