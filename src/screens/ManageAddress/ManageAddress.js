import React, { Component } from 'react';
import {
    View,
    Image,
    ActivityIndicator,
    Text,
    FlatList,
    AsyncStorage,
} from 'react-native';
import Axios from "axios";
import { Button, Divider } from 'react-native-elements';
import * as Images from '../../assets/index';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import * as Theme from "../../themes/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';



class ManageAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userDetails: [],
        };
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        Axios.get(
            'https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v3/customers',
            {
                params: {
                    email: 'user_test1@gmail.com',
                    consumer_key: 'ck_6dcda63598acde7f3c8f52a07095629132ca84ed',
                    consumer_secret: 'cs_8757c7474b8093821cec8468c09a2cacb9ccb65c',
                },
            },
        )
            .then(res => {
                this.setState({
                    userDetails: res.data[0]
                })
                this.setState({ isLoading: false })
                console.log("dets", this.state.userDetails)
            })
            .catch(err => {
                console.log(err);
            });
    };

    renderBillingAddress = (userDetails) => {
        if (userDetails !== undefined) {
            if (userDetails.billing !== undefined) {
                const { billing } = userDetails;
                return (
                    <>
                        <View style={styles.flexRow}>
                            <View>
                                <Text
                                    style={styles.heading}>
                                    <Icon name="location-pin" size={20} color="grey" />
                                    {(`  Billing Address`)}
                                </Text>
                                <Text style={styles.subHeading}>
                                    {`${billing.first_name} ${billing.last_name}`}
                                </Text>
                                <Text style={styles.subHeading}>
                                    {
                                        billing.address_1 + ', ' + billing.address_2 + ', ' +
                                        billing.city + ', ' + billing.state + ', ' +
                                        billing.country
                                    }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.logoutContainer}>
                            <Button
                                containerStyle={styles.addAddrBtnContainer}
                                iconRight
                                title="Edit Billing Address "
                                buttonStyle={
                                    styles.logoutBtn
                                }
                                type="clear"
                                onPress={
                                    () => this.showEditAddrOverlay(false)
                                }
                            />
                        </View>
                        <Divider style={styles.dividerVerymall} />
                    </>
                )
            } else {
                return (
                    <View style={styles.logoutContainer}>
                        <Button
                            containerStyle={styles.addAddrBtnContainer}
                            iconRight
                            title="Add Billing Address "
                            buttonStyle={
                                styles.logoutBtn
                            }
                            onPress={
                                () => this.showAddAddrOverlay(false)
                            }
                        />
                    </View>
                )
            }
        }
    }

    renderShippingAddress = (userDetails) => {
        if (userDetails !== undefined) {
            if (userDetails.billing !== undefined) {
                const { billing } = userDetails;
                return (
                    <>
                        <View style={styles.flexRow}>
                            <View>
                                <Text
                                    style={styles.heading}>
                                    <Icon name="location-pin" size={20} color="grey" />
                                    {(`  Shipping Address`)}
                                </Text>
                                <Text style={styles.subHeading}>
                                    {`${billing.first_name} ${billing.last_name}`}
                                </Text>
                                <Text style={styles.subHeading}>
                                    {
                                        billing.address_1 + ', ' + billing.address_2 + ', ' +
                                        billing.city + ', ' + billing.state + ', ' +
                                        billing.country
                                    }
                                </Text>
                            </View>
                        </View>
                        <View style={styles.logoutContainer}>
                            <Button
                                containerStyle={styles.addAddrBtnContainer}
                                iconRight
                                title="Edit Shipping Address "
                                buttonStyle={
                                    styles.logoutBtn
                                }
                                type="clear"
                                onPress={
                                    () => this.showAddrOverlay(true)
                                }
                            />
                        </View>
                    </>
                )
            } else {
                return (
                    <View style={styles.logoutContainer}>
                        <Button
                            containerStyle={styles.addAddrBtnContainer}
                            iconRight
                            title="Add Shipping Address "
                            buttonStyle={
                                styles.logoutBtn
                            }
                            onPress={
                                () => this.showAddAddrOverlay(true)
                            }
                        />
                    </View>
                )
            }
        }
    }

    showEditAddrOverlay = (isShippingAddr) => {
        this.props.navigation.navigate(
            'Account',
            {
                screen: 'AddressEdit',
                params: {
                    isShowAddrOverlay: true,
                    isEdit: true,
                    isShippingAddr
                }
            }
        );
    }
    showAddAddrOverlay = (isShippingAddr) => {
        this.props.navigation.navigate(
            'Account',
            {
                screen: 'AddressEdit',
                params: {
                    isShowAddrOverlay: true,
                    isEdit: false,
                    isShippingAddr
                }
            }
        );
    }

    render() {
        return (
            <SafeAreaView>
                {this.state.isLoading ? <MenuLoader /> : (<>
                    <ScrollView>
                        <StatusBarComponent styleType={0} />
                        <View style={styles.continerStyles}>
                            <View style={styles.innerContainer}>
                                <View style={styles.orderSectionTitleContainer}>
                                    <Text styles={styles.orderSectionTitle}>Manage Address</Text>
                                </View>
                                {this.renderBillingAddress(this.state.userDetails)}
                                {this.renderShippingAddress(this.state.userDetails)}
                            </View>{/* End InnerContainer */}
                        </View>
                    </ScrollView>
                </>)}
            </SafeAreaView>
        );
    }
}

export default ManageAddress;