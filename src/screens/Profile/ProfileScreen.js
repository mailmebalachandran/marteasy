import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Axios from "axios";
import { Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';
import ConnectionError from "../../components/Errors/ConnectionError";
import { USER_LOGIN_ERROR } from "../../assets/index";
import ButtonComponent from "../../components/Button/Button";
import { isUserLoggedIn, logout } from "../../utils";

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userDetails: {},
            orders: [],
            isLoginOverlay: false,
            isConnected: true,
        };
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    handleConnectivityChange = isConnected => {
        this.setState({ isConnected });
    }
    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({ isLoading: true });
            isUserLoggedIn().then((loginDetails) => {
                const user = JSON.parse(loginDetails);
                this.setState({ isLoginOverlay: false });
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
                            Axios.get(
                                'https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v2/orders',
                                {
                                    params: {
                                        customer: res.data[0].id.toString(),
                                        consumer_key: 'ck_6dcda63598acde7f3c8f52a07095629132ca84ed',
                                        consumer_secret: 'cs_8757c7474b8093821cec8468c09a2cacb9ccb65c',
                                    },
                                },
                            ).then((res) => {
                                this.setState({
                                    orders: res.data
                                })
                                this.setState({ isLoading: false })
                            }).catch(err => {
                                console.log(err);
                            });
                            this.setState({
                                userDetails: res.data[0]
                            })

                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    this.setState({ isLoading: false });
                    this.setState({ isLoginOverlay: true });
                }
            })
            // const unsubscribe = NetInfo.addEventListener(state => {
            //     this.setState({isConnected : state.isConnected});
            // });
        })
    };

    renderPhoneNum = (billingAddr) => {
        if (billingAddr) {
            return billingAddr.phone !== undefined ? billingAddr.phone : "No Phone";
        } else {
            return "No Phone";
        }
    }
    navigateToManageAddr = () => {
        this.props.navigation.navigate('Account', 
        { screen: 'ManageAddr' });
    }
    renderLoginError = () => {
        return (
            <View style={styles.loginErrorConatiner}>
                <View style={styles.imgViewStyle}>
                    <Image source={USER_LOGIN_ERROR} />
                </View>
                <Text style={styles.errorHeader}>You need to login {'\n'} to access this</Text>
                <Text style={styles.errorSubText}>
                    Still you can browse products {'\n'}
                    from our awesome collection
                </Text>
                <ButtonComponent
                    titleValue={"Login Now"}
                    onPressHandler={() => this.props.navigation.navigate('LoginScreen')}
                />
            </View>
        )
    }
    renderNoOrdersErr = () => {
        return (
            <View style={styles.noOrdersErrContainer}>
                <Text>
                    No Orders Yet
                </Text>
                <Text>
                    Search your favourite below
                </Text>
                <ButtonComponent
                    titleValue={"Search Products"}
                    onPressHandler={() => this.props.navigation.navigate("Search")}
                />
            </View>
        )
    }
    render() {
        const { first_name, last_name, email, billing } = this.state.userDetails;
        return (
            <SafeAreaView>
                {this.state.isLoginOverlay ?
                    this.renderLoginError() : (<>
                        {this.state.isLoading ? <MenuLoader /> : (<>
                            <ScrollView>
                                <StatusBarComponent styleType={0} />
                                <View style={styles.continerStyles}>
                                    <View style={styles.innerContainer}>
                                        <View>
                                            <Text
                                                style={styles.name}>
                                                {/* <Icon name="user" size={20} color="grey" /> */}
                                                {(`${first_name} ${last_name}`).toUpperCase()}
                                            </Text>
                                            <Text style={styles.numEmail}>
                                                {this.renderPhoneNum(billing)}
                                                <Text style={styles.dot}>{` . `}</Text>
                                                {` ${email}`}
                                            </Text>
                                        </View>
                                        <Divider style={styles.divideStyles} />
                                        <TouchableOpacity
                                            onPress={this.navigateToManageAddr}
                                        >
                                            <View style={styles.flexRow}>
                                                <View styles={styles.manageAddrLeftContainer}>
                                                    <Text style={styles.heading}>
                                                        <Icon name="home" size={20} color="grey" />
                                                        {(`  Manage Address`)}
                                                    </Text>
                                                    <Text style={styles.subHeading}>
                                                        {`Manage Your Billing Address, Shipping Address Here`}
                                                    </Text>
                                                </View>
                                                <View style={styles.manageAddrRightContainer}>
                                                    <Icon name="angle-right" size={25} color="grey" />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <Divider style={styles.dividerSmall} />
                                        <TouchableOpacity>
                                            <View style={styles.flexRow}>
                                                <View styles={styles.manageAddrLeftContainer}>
                                                    <Text
                                                        style={styles.heading}>
                                                        <Icon name="link" size={20} color="grey" />
                                                        {(`  Help `)}
                                                    </Text>
                                                    <Text style={styles.subHeading}>
                                                        {`Faq & Links `}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={styles.orderSectionTitleContainer}>
                                            <Text styles={styles.orderSectionTitle}>Recent Orders</Text>
                                        </View>
                                        {this.state.orders.length > 0 ?
                                            (this.state.orders.map((order) => {
                                                let total = 0;
                                                return (
                                                    <>
                                                        <View
                                                            key={order.store.id}
                                                            style={styles.orderDetailsContainer}
                                                        >
                                                            <Text style={styles.storeName}>
                                                                {order.store.name}
                                                            </Text>
                                                            <Text style={styles.storeCity}>
                                                                {order.store.address.street_2
                                                                    && order.store.address.street_2}
                                                            </Text>
                                                            <View style={styles.orderPriceContainer}>
                                                                <Text style={styles.orderPrice}>
                                                                    {order.line_items.map((item) => {
                                                                        total += item.total
                                                                        return (
                                                                            `${item.name} x ${item.quantity} , `
                                                                        )
                                                                    })}
                                                                </Text>
                                                                <Text style={styles.orderPrice}>
                                                                    {`Total = ${total}`},
                                                    {` ${order.date_created_gmt}`}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <Divider style={styles.dividerVerymall} />
                                                    </>
                                                )
                                            })) :
                                            (<>
                                                {this.renderNoOrdersErr()}
                                            </>)
                                        }
                                        <View style={styles.logoutContainer}>
                                            <Button
                                                icon={
                                                    <Icon
                                                        name="power-off"
                                                        size={15}
                                                        color="white"
                                                    />
                                                }
                                                containerStyle={styles.logoutBtnContainer}
                                                iconRight
                                                title="Logout "
                                                buttonStyle={
                                                    styles.logoutBtn
                                                }
                                                onPress={() => logout(this.props.navigation)}
                                            />
                                        </View>
                                    </View>{/* End InnerContainer */}
                                </View>
                            </ScrollView>
                        </>)}
                    </>)}
            </SafeAreaView>
        );
    }
}

export default ProfileScreen;
