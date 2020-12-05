import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {isUserLoggedIn, logout} from '../../utils';
import UserAPI from '../../api/User/UserAPI';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import PaymentAPI from '../../api/Payment/PaymentAPI';
import Toast, {DURATION} from 'react-native-easy-toast';
import NetInfo, {
  NetInfoCellularGeneration,
} from '@react-native-community/netinfo';
import ErrorOverlay from '../../components/Errors/ErrorOverlay';
import MenuLoader from '../../components/Loader/MenuLoader';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddShippingAddressEnabled: false,
      isAddBillingAddressEnabled: false,
      userDetails: {},
      isCODDisabled: true,
      isLoading: false,
      IsInternetConnected: false
    };
  }

  componentDidMount = async () => {
    this.onPageLoad();
    // this.focusListener = navigation.addListener('didFocus', () => {
    //   this.onPageLoad();
    // });
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.onPageLoad();
    });
  };

  handleConnectivityChange = isConnected => {
    if (isConnected.isConnected == true) {
      this.setState({IsInternetConnected: true});
    } else {
      this.setState({IsInternetConnected: false});
    }
  };

  onPageLoad = async () => {
    NetInfo.addEventListener(this.handleConnectivityChange);
    NetInfo.fetch().done(isConnected => {
      if (isConnected.isConnected == true) {
        this.setState({IsInternetConnected: true});
      } else {
        this.setState({IsInternetConnected: false});
      }
    });
    this.setState({isLoading: true});
    const loginDetails = await isUserLoggedIn();
    const user = JSON.parse(loginDetails);
    let addressBasedUser = await UserAPI.CheckUserAddressAvailable(user);
    if (addressBasedUser != undefined) {
      this.setState({userDetails: addressBasedUser.data[0]});
      if (
        addressBasedUser.data[0].billing.billing !== undefined &&
        addressBasedUser.data[0].billing.billing.city !== ''
      ) {
        this.setState({isAddBillingAddressEnabled: false});
      } else {
        this.setState({isAddBillingAddressEnabled: true});
      }
      if (
        addressBasedUser.data[0].billing.shipping !== undefined &&
        addressBasedUser.data[0].billing.shipping.city !== ''
      ) {
        this.setState({isAddShippingAddressEnabled: false});
      } else {
        this.setState({isAddShippingAddressEnabled: true});
      }
      if (
        this.state.isAddBillingAddressEnabled &&
        this.state.isAddShippingAddressEnabled
      ) {
        this.setState({isCODDisabled: false});
      } else {
        this.setState({isCODDisabled: true});
      }
      this.setState({isLoading: false});
    } else {
      this.setState({isLoading: false});
    }
  };

  AddressButtonOnHandler = isShipping => {
    this.props.navigation.navigate('Account', {
      screen: 'AddressEdit',
      params: {
        isShowAddrOverlay: true,
        isEdit: true,
        isShipping,
        userId: this.state.userDetails.id,
        isFromPaymentScreen: true,
      },
    });
  };

  CODHandler = async () => {
    this.setState({isLoading: true});
    let asyncDetails = await AsyncStorage.getItem('Cart');
    let asyncDetailsTemp = JSON.parse(asyncDetails);
    let result = Object.keys(asyncDetailsTemp).map(function(k) {
      return asyncDetailsTemp[k];
    });
    let productDetails = [];
    for (var item in result) {
      for (var product in result[item].products) {
        let productDetail = {};
        if (result[item].products[product] !== null) {
          productDetail = {
            product_id: result[item].products[product].productId,
            quantity: result[item].products[product].count,
          };
          productDetails.push(productDetail);
        }
      }
    }
    let orderDetails = {
      payment_method: 'COD',
      payment_method_title: 'Cash On Delivery',
      set_paid: true,
      billing: {
        first_name: this.state.userDetails.billing.first_name,
        last_name: this.state.userDetails.billing.last_name,
        address_1: this.state.userDetails.billing.address_1,
        address_2: this.state.userDetails.billing.address_2,
        city: this.state.userDetails.billing.city,
        state: this.state.userDetails.billing.state,
        postcode: this.state.userDetails.billing.postcode,
        country: this.state.userDetails.billing.country,
        email: this.state.userDetails.billing.email,
        phone: this.state.userDetails.billing.phone,
      },
      shipping: {
        first_name: this.state.userDetails.billing.first_name,
        last_name: this.state.userDetails.billing.last_name,
        address_1: this.state.userDetails.billing.address_1,
        address_2: this.state.userDetails.billing.address_2,
        city: this.state.userDetails.billing.city,
        state: this.state.userDetails.billing.state,
        postcode: this.state.userDetails.billing.postcode,
        country: this.state.userDetails.billing.country,
      },
      line_items: productDetails,
      shipping_lines: [
        {
          method_id: 'flat_rate',
          method_title: 'Flat Rate',
          total: '10',
        },
      ],
    };
    let orderDetailsResult = await PaymentAPI.PaymentCOD(orderDetails);
    this.setState({isLoading: false});
    if (orderDetailsResult.id > 0) {
      this.refs.toast.show(
        'Order Placed Redirecting to Home page.',
        DURATION.LENGTH_LONG,
      );
      await AsyncStorage.removeItem('Cart');
      this.props.navigation.navigate('HomeScreen');
    } else {
      this.setState({isLoading: false});
      this.refs.toast.show(
        'Error in creating the orders. Please contact administrator.',
        DURATION.LENGTH_LONG,
      );
    }
  };

  render() {
    return (
      <>
        {!this.state.IsInternetConnected ? (
          <ErrorOverlay errorType={'NetWork'} />
        ) : this.state.isLoading ? (
          <MenuLoader />
        ) : this.state.isShowError ? (
          <ErrorOverlay errorType={'API'} reload={this.componentDidMount} />
        ) : (
          <>
            <View>
              {this.state.userDetails != undefined &&
              this.state.userDetails.shipping !== undefined &&
              this.state.userDetails.shipping.city !== '' ? (
                <View style={{padding: 10}}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#e3e3e3',
                      padding: 15,
                    }}>
                    <Text style={{fontSize: 20}}>
                      <Icon name="shipping-fast" size={20} color="grey" />
                      {`  Shipping Address`}
                    </Text>
                  </View>
                  <Text style={styles.subHeading}>
                    {`${this.state.userDetails.shipping.first_name} ${
                      this.state.userDetails.shipping.last_name
                    }`}
                  </Text>
                  <Text style={styles.subHeading}>
                    {this.state.userDetails.shipping.address_1 +
                      ', ' +
                      this.state.userDetails.shipping.address_2 +
                      ', '}
                  </Text>
                  <Text>
                    {this.state.userDetails.shipping.city +
                      ', ' +
                      this.state.userDetails.shipping.state +
                      ', ' +
                      this.state.userDetails.shipping.country}
                  </Text>
                </View>
              ) : (
                <View style={{padding: 20}}>
                  <Button
                    containerStyle={styles.addAddrBtnContainer}
                    iconRight
                    title="Add Shipping Address "
                    buttonStyle={{margin: 10}}
                    onPress={
                      //TRUE in below call is determine whether it is shipping or not
                      () => this.AddressButtonOnHandler(true)
                    }
                  />
                </View>
              )}
              {this.state.userDetails != undefined &&
              this.state.userDetails.billing !== undefined &&
              this.state.userDetails.billing.city !== '' ? (
                <View style={{padding: 10}}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#e3e3e3',
                      padding: 15,
                    }}>
                    <Text style={{fontSize: 20}}>
                      <Icon name="money-bill" size={20} color="grey" />
                      {`  Billing Address`}
                    </Text>
                  </View>
                  <Text style={styles.subHeading}>
                    {`${this.state.userDetails.billing.first_name} ${
                      this.state.userDetails.billing.last_name
                    }`}
                  </Text>
                  <Text style={styles.subHeading}>
                    {this.state.userDetails.billing.address_1 +
                      ', ' +
                      this.state.userDetails.billing.address_2 +
                      ', '}
                  </Text>
                  <Text>
                    {this.state.userDetails.billing.city +
                      ', ' +
                      this.state.userDetails.billing.state +
                      ', ' +
                      this.state.userDetails.shipping.country}
                  </Text>
                </View>
              ) : (
                <View style={{padding: 20}}>
                  <Button
                    containerStyle={styles.addAddrBtnContainer}
                    iconRight
                    title="Add Billing Address "
                    buttonStyle={{margin: 10}}
                    onPress={
                      //TRUE in below call is determine whether it is shipping or not
                      () => this.AddressButtonOnHandler(false)
                    }
                  />
                </View>
              )}
              <Button
                containerStyle={styles.addAddrBtnContainer}
                iconRight
                title="Cash On Delivery "
                buttonStyle={{margin: 10}}
                disabled={this.state.isCODDisabled}
                onPress={
                  //TRUE in below call is determine whether it is shipping or not
                  () => this.CODHandler()
                }
              />
              <Toast
                ref="toast"
                style={{backgroundColor: 'green'}}
                position="top"
                positionValue={30}
                fadeInDuration={750}
                fadeOutDuration={5000}
                opacity={0.8}
                textStyle={{color: 'white'}}
              />
            </View>
          </>
        )}
      </>
    );
  }
}

export default PaymentScreen;
