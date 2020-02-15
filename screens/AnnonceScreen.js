import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Button } from "react-native-elements";
import { connect } from 'react-redux';
import CustomHeader from "../components/header";

class AnnonceScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: {}
    };
  }

  componentDidMount = async() => {
    // fetch api here
  }

  // render the view
  render() {
    const { isLoading, user } = this.state;
    return (
      <View style={styles.myStyle}>
          <CustomHeader navigation={this.props.navigation} title="Annonce" />

            {/* Reste de la vue ici */}

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
  }
});
