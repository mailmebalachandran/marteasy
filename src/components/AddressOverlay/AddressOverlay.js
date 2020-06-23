import React from 'react';
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";
import Label from '../../components/Label/Label';
import TextBox from '../../components/TextBox/TextBox';
import * as Theme from "../../themes/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

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
            state: "",
            country: "IN",
            postalCode: "",
            phone: "",
            email: "",
            isAddrUpdated: "",
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
            state: data.state,
            country: "IN",
            postalCode: data.postcode,
            phone: data.phone,
            email: data.email,
            userId: "",
        })
    }

    componentDidMount = () => {
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
                    this.setState({userId: data[0].id})
                    this.setState({ isLoading: false })
                })
                .catch(err => {
                    console.log(err);
                });
        }
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
                isAddrUpdate: this.state.isAddrUpdated,
            }
        })
    }
    updateAddr = () => {
        const { isShipping, userId } = this.props.route.params;
        let payload = {}
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
                    state: this.state.state
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
                    state: this.state.state,
                    email: this.state.email,
                    phone: this.state.phone,
                }
            }
        }
        axios.put(
            'https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v3/customers/'+userId,
            payload,
            {
                params: {
                    email: 'user_test2@gmail.com',
                    consumer_key: 'ck_6dcda63598acde7f3c8f52a07095629132ca84ed',
                    consumer_secret: 'cs_8757c7474b8093821cec8468c09a2cacb9ccb65c',
                },
            },
        ).then((res) => {
            console.log("from update",res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.continerStyles}>
                        <View style={styles.innerContainer}>
                            <View style={styles.orderSectionTitleContainer}>
                                <Text styles={styles.orderSectionTitle}>{this.renderOverlayHeading()}</Text>
                            </View>
                            <TextBox
                                placeHolderValue="FirstName"
                                textValue={this.state.firstName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ firstName: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="LastName"
                                textValue={this.state.lastName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ lastName: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Company Name"
                                textValue={this.state.company}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ company: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Address Line 1"
                                textValue={this.state.address1}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ address1: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Address Line 2"
                                textValue={this.state.address2}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ address2: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Town/City"
                                textValue={this.state.city}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ city: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="State/Country"
                                textValue={this.state.state}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ state: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Postal Code"
                                textValue={this.state.postalCode}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ postalCode: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Email"
                                textValue={this.state.email}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ email: text });
                                }}
                            />
                            <View style={styles.btnContainer}>
                                <Button
                                    icon={
                                        <Icon
                                            name="save"
                                            size={15}
                                            color="white"
                                        />
                                    }
                                    title="Save"
                                    style={styles.savebtn}
                                    onPress={
                                        this.updateAddr
                                    }
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
                                    style={styles.cancelBtn}
                                    onPress={
                                        this.navigateToManageAddr
                                    }
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