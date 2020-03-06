import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Icon, Button } from "react-native-elements";
import { connect } from 'react-redux';
import CustomHeader from "../components/header";

class AnnonceScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      trip: this.props.navigation.state.params.trip,
      user: {}
    };
  }

  details(){

  }

  componentDidMount = async() => {
    //fetch api here
  }

  // render the view
  render() {
    
    const { isLoading, user, trip } = this.state;
    return (
      <View style={styles.myStyle}>
          <CustomHeader navigation={this.props.navigation} title="Annonce" />
          <View style={styles.blockDetail}>
            <Text h3>{trip.arrival_name}</Text>
          </View>

          <View style={styles.blockDetail}>
            <Text h3>{trip.car_model}</Text>
          </View>

          <View style={styles.blockDetail}>
            <Text h3 >{trip.date}</Text>
          </View>

          <View style={styles.blockDetail}>
            <Text h3>{trip.departure_name}</Text>
          </View>

      </View>
    );
  }
}


// Redux function
const mapStateToProps = (state) => {
  return {
      userToken: state.userToken
  }
}

export default connect(mapStateToProps)(AnnonceScreen);


// Style properties
const styles = StyleSheet.create({
  myStyle: {
    flex: 1
  },
  blockDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 2,
    marginBottom: 50,
    color: 'blue',
    width: 200, 
    height: 50, 
    backgroundColor: 'powderblue'
  }
},
);
