import React from 'react';
import { View, Text, Button } from "react-native";
import styles from "./styles";
import * as Theme from "../../themes/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import { Input } from 'react-native-elements';
import { addrValidation } from "./validation";
import ActivityContainer from "../../components/ActivityIndicator/ActivityContainer";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader"

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

    componentDidMount = () => {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({ isLoading: true });
            const { isEdit, isShipping } = this.props.route.params;
            if (isEdit) {
                this.setState({ isLoading: true })
                axios.get(
                    'https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v3/customers',
                    {
                        params: {
                            email: 'user_test2@gmail.com',
                            consumer_key: 'ck_6dcda63598acde7f3c8f52a07095629132ca84ed',
                            consumer_secret: 'cs_8757c7474b8093821cec8468c09a2cacb9ccb65c',
                        },
                    },
                )
                    .then(res => {
                        const { data } = res;
                        isShipping ?
                            this.setEditDetails(data[0].shipping) : this.setEditDetails(data[0].billing)
                        this.setState({ userId: data[0].id })
                        this.setState({ isLoading: false })
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        });
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
        this.props.navigation.navigate("Account", {
            screen: "ManageAddr",
            params: {
                isAddrUpdated: this.state.isAddrUpdated,
            }
        })
    }
    updateAddr = () => {
        const { isShipping, userId } = this.props.route.params;
        let payload = {}
        const { isError } = addrValidation(this.state)
        if (isError) {
            console.log("inside vali")
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
            'https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v3/customers/' + userId,
            payload,
            {
                params: {
                    email: 'user_test2@gmail.com',
                    consumer_key: 'ck_6dcda63598acde7f3c8f52a07095629132ca84ed',
                    consumer_secret: 'cs_8757c7474b8093821cec8468c09a2cacb9ccb65c',
                },
            },
        ).then((res) => {
            console.log("from update", res.data)
            this.setState({ isAddrUpdated: true });
            this.navigateToManageAddr();
        })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        const { isShipping } = this.props.route.params;
        return (
            <SafeAreaView>
                <ScrollView>
                <ProfileHeader />
                    {this.state.isLoading &&
                        <ActivityContainer isLoading={this.state.isLoading} />
                    }
                    <View style={styles.continerStyles}>
                        <View style={styles.innerContainer}>
                            <View style={styles.orderSectionTitleContainer}>
                                <Text styles={styles.orderSectionTitle}>{this.renderOverlayHeading()}</Text>
                            </View>
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
                                    buttonStyle={styles.savebtn}
                                    onPress={
                                        this.updateAddr
                                    }
                                    raised={false}
                                />
                                <Button
                                    icon={
                                        <Icon
                                            name="clear"
                                            size={15}
                                            color="white"
                                        />
                                    }
                                    title="Cancel"
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
            </SafeAreaView>
        );
    }
}

export default AddressOverlay;