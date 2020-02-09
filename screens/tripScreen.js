import React from 'react';
import { StyleSheet, FlatList, RefreshControl, View, ActivityIndicator, Text, TouchableOpacity, ClippingRectangle } from 'react-native'
import { Icon  } from 'react-native-elements';
import { connect } from 'react-redux';
import CustomHeader from "../components/header";
import { setUserDetails } from '../actions/user';

class TripScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            isLoading: true
        }
        
    }

    componentDidMount = async() => {
        const user = await this.props.setUserDetails(this.props.userToken.userToken);
        this.setState({
          user: user,
          isLoading: false
        })
      }

    handleOnPress = async(item) => {
    }

    onRefresh = () => {
    }

    noTripComponent = () => {
        return(
            <View style={styles.empty}>
                <Icon 
                    name='alarm'
                    type='Feather'
                    color={'#00839A'}
                />
                <Text>Aucuns voyages</Text>
            </View>
        );
    }

    render() {
        const { isLoading, trips, user } = this.state;
        console.log(user);
        return (
            <View style={ styles.container }>
                { isLoading ? (
                    <View style={styles.activity}>
                        <ActivityIndicator color="#00839A" />
                        <Text>Chargement en cours...</Text>
                    </View>
                ) : (
                    <View style={ styles.container }>
                        <CustomHeader navigation={this.props.navigation} title="Mes annonces" />
                        <FlatList
                            contentContainerStyle={styles.list}
                            data={user.trips_driver}
                            keyExtractor={(item, index) => index.toString()}
                            enableEmptySections={true}
                            ListEmptyComponent={this.noTripComponent}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={() => this.handleOnPress(item)} >
                                    <TripComponent trip={item} />
                                </TouchableOpacity>
                            )}
                            refreshControl={
                                <RefreshControl
                                    refreshing={isLoading}
                                    onRefresh={this.onRefresh.bind(this)}
                                    colors={["#00839A"]}
                                />
                            }
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
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(TripScreen);

const styles = StyleSheet.create({
    activity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        backgroundColor: '#E4E5E6',
        width: '100%', 
        paddingStart: 20, 
        paddingEnd: 20
    },
    list: {
        flex: 1
    },
    empty: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       paddingTop: 150
    },
    container: {
        flex: 1
    },
    trip: {
        paddingStart: 5, 
        paddingEnd: 5, 
        backgroundColor: '#ffffff', 
        flexDirection: 'row', 
        height: 74,
        marginTop: 5,
        marginBottom: 5
    },
    tripIcon: {
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const TripComponent = ({trip}) => (
    <View>
        <View style={styles.trip}>
            <View style={styles.tripIcon}>
                <Icon type='font-awesome' name='car' />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text numberOfLines={2}>Date de création: { trip.date } </Text>
                <Text style={{ fontSize: 12 }}> id: { trip.id } </Text>
            </View>
        </View>
    </View>
)