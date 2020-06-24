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
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import * as Theme from "../../themes/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';


class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userDetails: {},
            orders: [],
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
    };

    renderPhoneNum = (billingAddr) => {
        if (billingAddr) {
            return billingAddr.phone !== undefined ? billingAddr.phone : "No Phone";
        } else {
            return "No Phone";
        }
    }
    navigateToManageAddr = () => {
        this.props.navigation.navigate('Account', { screen: 'ManageAddr' });
    }

    render() {
        const { first_name, last_name, email } = this.state.userDetails;
        return (
            <SafeAreaView>
                {this.state.isLoading ?
                    <MenuLoader />
                    : (
                        <>
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
                                                {this.renderPhoneNum(this.state.billing)}
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
                                        {
                                            this.state.orders.map((order) => {
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
                                            })
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
                                            />
                                        </View>
                                    </View>{/* End InnerContainer */}
                                </View>
                            </ScrollView>
                        </>)}
            </SafeAreaView>
        );
    }
}

export default ProfileScreen;
