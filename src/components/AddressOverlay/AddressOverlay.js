import React from 'react';
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";
import { Input, Button } from 'react-native-elements';
import { addrValidation } from "./validation";
import { isUserLoggedIn } from "../../utils";
import MenuLoader from "../../components/Loader/MenuLoader";
import ErrorOverlay from "../../components/Errors/ErrorOverlay";
import ActivityOverlay from "../ActivityOverlay/ActivityOverlay";
import * as Constants from '../../api/Constants';

class AddressOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            company: "",
            address1: "",
            address2: "",
            city: "",
            stateName: "",
            country: "IN",
            postalCode: "",
            phone: "",
            email: "",
            isAddrUpdated: "",
            //Validation
            firstNameVal: "",
            lastNameVal: "",
            companyVal: "",
            address1Val: "",
            address2Val: "",
            cityVal: "",
            stateNameVal: "",
            countryVal: "",
            postalCodeVal: "",
            phoneVal: "",
            emailVal: "",
            isLoading: false,
            commonErr: "Please Enter All Required Fields",
            IsInternetConnected: true,
            isFromPaymentScreen:false
        }
    }
    setEditDetails = (data) => {
        this.setState({
            firstName: data.first_name,
            lastName: data.last_name,
            company: data.company,
            address1: data.address_1,
            address2: data.address_2,
            city: data.city,
            stateName: data.state,
            country: "IN",
            postalCode: data.postcode,
            phone: data.phone,
            email: data.email,
            userId: "",
        })
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
    componentDidMount = () => {
        NetInfo.addEventListener(this.handleConnectivityChange);
        NetInfo.fetch().done((isConnected) => {
            if (isConnected.isConnected == true) {
                this.setState({ IsInternetConnected: true })
            }
            else {
                this.setState({ IsInternetConnected: false })
            }
        });
        this.setState({isFromPaymentScreen: this.props.route.params.isFromPaymentScreen});
        this.setState({ isLoading: true });
        this.setFormData();
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({ isLoading: true });
            this.setFormData();
        });
    }
    setFormData = () => {
        isUserLoggedIn().then((loginDetails) => {
            const user = JSON.parse(loginDetails);
            this.setState({ userEmail: user.user_rmail })
            if (user) {
                const { isEdit, isShipping } = this.props.route.params;
                if (isEdit) {
                    this.setState({ isLoading: true });
                    axios.get(
                        Constants.GLOBAL_VALUE+'/wp-json/wc/v3/customers',
                        {
                            params: {
                                email: user.user_email,
                            },
                        },
                    )
                        .then(res => {
                            const { data } = res;
                            isShipping ?
                                this.setEditDetails(data[0].shipping) :
                                this.setEditDetails(data[0].billing)
                            this.setState({ userId: data[0].id });
                            this.setState({ isLoading: false })
                        })
                        .catch(err => {
                        });
                } else {
                    this.setState({ isLoading: false });
                }
            } else {
                this.props.navigation.navigate("Account");
                this.setState({ isLoading: false });
            }
        })
    }
    hideOverlay = () => {
        this.setState({ isVisible: false })
    }
    renderOverlayHeading = () => {
        let heading = "";
        const { isEdit, isShipping } = this.props.route.params;
        heading += isEdit ? "Edit " : "Add ";
        heading += isShipping ? "Shipping" : "Billing";
        heading += " Address"
        return heading;
    }
    navigateToManageAddr = () => {
        if(!this.state.isFromPaymentScreen)
        {
        this.props.navigation.navigate("Account", {
            screen: "ManageAddr",
            params: {
                isAddrUpdated: this.state.isAddrUpdated,
            }
        })
        }
        else{
             this.props.navigation.navigate("Payment");
        }
    }
    updateAddr = () => {
        this.setState({ isLoading: true });
        const { isShipping, userId } = this.props.route.params;
        let payload = {}
        const isError  = false;//addrValidation(this.state, isShipping)
        if (isError) {
            this.setState({ isLoading: false });
            this.setState({ state: addrValidation });
            return false;
        }
        if (isShipping) {
            payload = {
                shipping: {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    company: this.state.company,
                    address_1: this.state.address1,
                    address_2: this.state.address2,
                    city: this.state.city,
                    postcode: this.state.postalCode,
                    country: this.state.country,
                    state: this.state.stateName
                }
            }
        } else {
            payload = {
                billing: {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    company: this.state.company,
                    address_1: this.state.address1,
                    address_2: this.state.address2,
                    city: this.state.city,
                    postcode: this.state.postalCode,
                    country: this.state.country,
                    state: this.state.stateName,
                    email: this.state.email,
                    phone: this.state.phone,
                }
            }
        }
        axios.put(
            Constants.GLOBAL_VALUE+'/wp-json/wc/v3/customers/' + userId,
            payload,
            {
                params: {
                    email: this.state.user_email,
                },
            },
        ).then((res) => {
            this.setState({ isLoading: false });
            this.navigateToManageAddr();
        })
            .catch((err) => {
                this.setState({ isLoading: false });
                this.setState({isError: true});
                if (err.response.data.data.params.billing) {
                    this.setState({ commonErr: err.response.data.data.params.billing });
                } else {
                    this.setState({ commonErr: "Oops Something went wrong!!!" });
                }
            })
    }
    render() {
        const { isShipping } = this.props.route.params;
        return (
            <SafeAreaView>
                {!this.state.IsInternetConnected ? <ErrorOverlay errorType={"NetWork"} /> :
                        (
                            <>
                            {this.state.isLoading && <ActivityOverlay /> }
                                <View style={styles.orderSectionTitleContainer}>
                                    <TouchableOpacity
                                        onPress={this.navigateToManageAddr}
                                    >
                                        <Icon iconStyle={styles.navIcon} name="arrow-left" size={20} color='black' />
                                    </TouchableOpacity>
                                    <Text style={styles.orderSectionTitle}>{this.renderOverlayHeading()}</Text>
                                </View>
                                <ScrollView>
                                    <View style={styles.continerStyles}>
                                        <View style={styles.innerContainer}>
                                            <Input
                                                placeholder='FirstName'
                                                label="First Name"
                                                value={this.state.firstName}
                                                onChangeText={text => {
                                                    this.setState({
                                                        firstName: text,
                                                        firstNameVal: "",
                                                    })
                                                }}
                                                errorMessage={this.state.firstNameVal}
                                            />
                                            <Input
                                                placeholder="LastName"
                                                label="Last Name"
                                                value={this.state.lastName}
                                                onChangeText={text => {
                                                    this.setState({
                                                        lastName: text,
                                                        lastNameVal: "",
                                                    });
                                                }}
                                                errorMessage={this.state.lastNameVal}
                                            />
                                            <Input
                                                placeholder="Company Name"
                                                label="Company Name"
                                                value={this.state.company}
                                                onChangeText={text => {
                                                    this.setState({
                                                        company: text,
                                                        companyVal: "",
                                                    });
                                                }}
                                                errorMessage={this.state.companyVal}
                                            />
                                            <Input
                                                placeholder="Address Line 1"
                                                label="Address Line 1"
                                                value={this.state.address1}
                                                onChangeText={text => {
                                                    this.setState({
                                                        address1: text,
                                                        address1Val: "",
                                                    });
                                                }}
                                                errorMessage={this.state.address1Val}
                                            />
                                            <Input
                                                placeholder="Address Line 2"
                                                label="Address Line 2"
                                                value={this.state.address2}
                                                onChangeText={text => {
                                                    this.setState({
                                                        address2: text,
                                                        address2Val: "",
                                                    });
                                                }}
                                                errorMessage={this.state.address2Val}
                                            />
                                            <Input
                                                placeholder="Town/City"
                                                label="Town/City"
                                                value={this.state.city}
                                                onChangeText={text => {
                                                    this.setState({
                                                        city: text,
                                                        cityVal: "",
                                                    });
                                                }}
                                                errorMessage={this.state.cityVal}
                                            />
                                            <Input
                                                placeholder="State"
                                                label="State"
                                                value={this.state.stateName}
                                                onChangeText={text => {
                                                    this.setState({
                                                        stateName: text,
                                                        stateNameVal: ""
                                                    });
                                                }}
                                                errorMessage={this.state.stateNameVal}
                                            />
                                            <Input
                                                placeholder="Postal Code"
                                                label="Post Code"
                                                value={this.state.postalCode}
                                                onChangeText={text => {
                                                    this.setState({
                                                        postalCode: text,
                                                        postalCodeVal: "",
                                                    });
                                                }}
                                                errorMessage={this.state.postalCodeVal}
                                            />
                                            {!isShipping &&
                                                (<>
                                                    <Input
                                                        placeholder="PhoneNumber"
                                                        label="Phone Number"
                                                        value={this.state.phone}
                                                        onChangeText={text => {
                                                            this.setState({
                                                                phone: text,
                                                                phoneVal: "",
                                                            });
                                                        }}
                                                        errorMessage={this.state.phoneVal}
                                                    />
                                                    <Input
                                                        placeholder="Email"
                                                        label="Email"
                                                        value={this.state.email}
                                                        onChangeText={text => {
                                                            this.setState({
                                                                email: text,
                                                                emailVal: "",
                                                            });
                                                        }}
                                                        errorMessage={this.state.emailVal}
                                                    />
                                                </>
                                                )
                                            }
                                            {this.state.isError &&
                                                <Text style={styles.errorMsg}>
                                                    {this.state.commonErr}
                                                </Text>
                                            }
                                            <View style={styles.btnContainer}>
                                                <Button
                                                    icon={
                                                        <Icon
                                                            name="save"
                                                            size={15}
                                                            color="white"
                                                        />
                                                    }
                                                    type="solid"
                                                    title="Save"
                                                    titleStyle={styles.btnTitle}
                                                    buttonStyle={styles.savebtn}
                                                    onPress={
                                                        this.updateAddr
                                                    }
                                                    raised={false}
                                                />
                                                <Button
                                                    icon={
                                                        <MaterialIcon
                                                            name="clear"
                                                            size={15}
                                                            color="white"
                                                        />
                                                    }
                                                    title="Cancel"
                                                    titleStyle={styles.btnTitle}
                                                    buttonStyle={styles.cancelBtn}
                                                    onPress={
                                                        this.navigateToManageAddr
                                                    }
                                                    raised={false}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </>
                        )}
            </SafeAreaView>
        );
    }
}

export default AddressOverlay;