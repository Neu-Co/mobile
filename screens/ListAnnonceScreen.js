import React from 'react';
import { StyleSheet, FlatList, RefreshControl, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import CustomHeader from "../components/header";
import { setUserDetails } from '../actions/user';
import ModalFilter from "../components/modalFilter";
import { getAllTrip } from "../services/trip.service";

class ListAnnonceScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            isLoading: true,
            isVisible: false
        }
    }

    componentDidMount = async() => {
        const { userToken } = this.props;
        const data = await getAllTrip(userToken.userToken);
        this.setState({
            isLoading: false,
            trips: data.trips
        })
    }

    handleOnPress = async(item) => {
    }

    onRefresh = () => {
    }

    onValidate = () => {
    }

    setModalVisible = (visible) => {
        this.setState({ isVisible: visible });
    }

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.handleOnPress(item)} >
            <TripComponent trip={item} />
        </TouchableOpacity>
    )

    ListHeaderComponent = () => (
        <View style={styles.searchContainer}>         
            <View style={{ marginStart: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Filters</Text>
            </View>
            <View style={{ marginEnd: 10 }}>
                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                    <Icon name="align-right" type="feather" color="#FFFFFF" />
                </TouchableOpacity>
            </View>       
        </View>
    )

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
        const { isLoading, trips, isVisible } = this.state;
        return (
            <View style={ styles.container }>
                { isLoading ? (
                    <View style={styles.activity}>
                        <ActivityIndicator color="#2089dc" />
                        <Text>Chargement en cours...</Text>
                    </View>
                ) : (
                    <View style={ styles.container }>
                        <CustomHeader navigation={this.props.navigation} title="Annonces" />
                        <FlatList
                            contentContainerStyle={styles.list}
                            data={trips}
                            keyExtractor={(item, index) => index.toString()}
                            enableEmptySections={true}
                            ListHeaderComponent={this.ListHeaderComponent}
                            ListEmptyComponent={this.noTripComponent}
                            renderItem={this.renderItem}
                            refreshControl={
                                <RefreshControl
                                    refreshing={isLoading}
                                    onRefresh={this.onRefresh.bind(this)}
                                    colors={["#2089dc"]}
                                />
                            }
                        />
                    </View>
                )}
                <ModalFilter 
                    isVisible={isVisible}
                    onClose={this.setModalVisible}
                    //onValidate={}
                />
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
  

export default connect(mapStateToProps, mapDispatchToProps)(ListAnnonceScreen);

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
        justifyContent: "space-between",
        height: 74,
        marginTop: 5,
        marginBottom: 5
    },
    tripIcon: {
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#2089DC'
    },
    noBorder: {
        borderWidth: 1,
        borderRadius: 100,
        paddingStart: 10,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: 'white'
    },
    searchContainer: {
        backgroundColor: '#2089dc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40
    }
});

const TripComponent = ({trip}) => (
    <View>
        <View style={styles.trip}>
            <View style={styles.tripIcon}>
                <Icon type='font-awesome' name='car' color='#2089DC' />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text numberOfLines={2}>{trip.departure_name} => {trip.arrival_name}</Text>
                <Text style={{ fontSize: 12 }}> {trip.date} </Text>
            </View>
            <View style={styles.tripIcon}>
                <Icon type='font-awesome' name='chevron-right' color='#2089DC' />
            </View>
        </View>
    </View>
)