import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import { Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';
import { isUserLoggedIn } from "../../utils";
import ErrorOverlay from "../../components/Errors/ErrorOverlay";

class ManageAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userDetails: [],
            IsInternetConnected: true,
        };
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    handleConnectivityChange = (isConnected) => {
        if (isConnected.isConnected == true) {
            this.setState({ IsInternetConnected: true })
        }
        else {
            this.setState({ IsInternetConnected: false })
        }
    }
    componentDidMount = async () => {
        NetInfo.addEventListener(this.handleConnectivityChange);
        NetInfo.fetch().done((isConnected) => {
            if (isConnected.isConnected == true) {
                this.setState({ IsInternetConnected: true })
            }
            else {
                this.setState({ IsInternetConnected: false })
            }
        });
        this.setState({ isLoading: true });
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            isUserLoggedIn().then((loginDetails) => {
                const user = JSON.parse(loginDetails);
                if (user) {
                    Axios.get(
                        'https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v3/customers',
                        {
                            params: {
                                email: user.user_email,
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
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    this.props.navigation.navigate("Account");
                }
            })
        })
    };

    renderBillingAddress = (userDetails) => {
        if (userDetails !== undefined) {
            if (userDetails.billing !== undefined && userDetails.billing.city !== "") {
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
                                    {billing.address_1 + ', ' + billing.address_2 + ','}
                                </Text>
                                <Text>
                                    {billing.city + ', ' + billing.state + ', ' + billing.country}
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
            if (userDetails.shipping !== undefined && userDetails.shipping.city !== "") {
                const { shipping } = userDetails;
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
                                    {`${shipping.first_name} ${shipping.last_name}`}
                                </Text>
                                <Text style={styles.subHeading}>
                                    {shipping.address_1 + ', ' + shipping.address_2 + ', '}
                                </Text>
                                <Text>
                                    {shipping.city + ', ' + shipping.state + ', ' + shipping.country}
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
                                    //TRUE in below call is determine whether it is shipping or not
                                    () => this.showEditAddrOverlay(true)
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
                                //TRUE in below call is determine whether it is shipping or not
                                () => this.showAddAddrOverlay(true)
                            }
                        />
                    </View>
                )
            }
        }
    }

    showEditAddrOverlay = (isShipping) => {
        this.props.navigation.navigate(
            'Account',
            {
                screen: 'AddressEdit',
                params: {
                    isShowAddrOverlay: true,
                    isEdit: true,
                    isShipping,
                    userId: this.state.userDetails.id
                }
            }
        );
    }
    showAddAddrOverlay = (isShipping) => {
        this.props.navigation.navigate(
            'Account',
            {
                screen: 'AddressEdit',
                params: {
                    isShowAddrOverlay: true,
                    isEdit: false,
                    isShipping,
                    userId: this.state.userDetails.id
                }
            }
        );
    }
    navigateToProfile = () => {
        this.props.navigation.navigate("Account", { screen: "Profile" })
    }

    render() {
        return (
            <SafeAreaView>
                {!this.state.IsInternetConnected ? <ErrorOverlay errorType={"NetWork"} /> : 
                    this.state.isLoading ? <MenuLoader /> : (<>
                    <View style={styles.orderSectionTitleContainer}>
                        <TouchableOpacity
                            onPress={
                                this.navigateToProfile
                            }
                        >
                            <FeatherIcon iconStyle={styles.navIcon} name="arrow-left" size={20} color='black' />
                        </TouchableOpacity>
                        <Text style={styles.orderSectionTitle}>Manage Address</Text>
                    </View>
                    <ScrollView>
                        <StatusBarComponent styleType={0} />
                        <View style={styles.continerStyles}>
                            <View style={styles.innerContainer}>
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