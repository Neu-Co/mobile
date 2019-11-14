import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Avatar, Button, Card } from "react-native-elements";
import Stars from "react-native-stars";
import { FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";

// Components
import CustomHeader from "../components/header";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} title="Profile" />
        <View style={styles.containerAvatar}>
          <Avatar size="xlarge" rounded activeOpacity={0.7} />
          <Text style={{ marginTop: 20 }}>MoiPLusToiPlusLUI</Text>
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
              marginStart: 60,
              marginEnd: 60
            }}
          >
            <Text>
              Actuellement crevé sur la route qui mene a la plaine de gaiac,
              pour aller peter un coup de chasse, je me suis arrèter pour boire
              un coup de sky.
            </Text>
          </View>

          <TouchableOpacity style={{ width: 350 }}>
            <Text
              style={{
                backgroundColor: "lightblue",
                paddingBottom: 10,
                paddingTop: 10,
                borderWidth: 0.5,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3
              }}
            ><MaterialCommunityIcons name='star' size={20} type='material'/>
              Reviews
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 350 }}>
            <Text
              style={{
                backgroundColor: "lightblue",
                paddingBottom: 10,
                paddingTop: 10,
                borderWidth: 0.5
              }}
            ><FontAwesome name='plane' size={20} type='material'/>
              Mes annonces
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 350 }}>
            <Text
              style={{
                backgroundColor: "lightblue",
                paddingBottom: 10,
                paddingTop: 10,
                borderWidth: 0.5,
                borderBottomLeftRadius: 3,
                borderBottomRightRadius: 3
              }}
            ><FontAwesome name='gears' size={20} type='material'/>
              Réglages
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 30 }}>
          <TouchableOpacity style={{ width: 350, marginBottom: 20 }}>
            <Text
              style={{
                backgroundColor: "orange",
                paddingBottom: 10,
                paddingTop: 10,
                borderWidth: 0.5,
                borderRadius: 3
              }}
            >
            <MaterialCommunityIcons name='export' size={20} type='material'/>
              Déconnexion
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerAvatar: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 25,
    flex: 1
  },
  myStarStyle: {
    color: "gold",
    backgroundColor: "transparent"
  },
  myEmptyStarStyle: {
    color: "gold"
  }
});
