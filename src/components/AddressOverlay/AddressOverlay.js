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
    componentDidMount = () => {
        // const { isEdit } = this.props.route.params;
        // if(isEdit) {
        //     axios.get
        // }
    }
    hideOverlay = () => {
        this.setState({ isVisible: false })
    }
    renderOverlayHeading = () => {
        let heading = "";
        const { isEdit, isShipping } = this.props.route.params;
        heading += isEdit ? "Edit " : "Add ";
        heading += isShipping ? "Shipping" : "Billing";
        heading += "Address"
        return heading;
    }
    navigateToManageAddr = () =>  {
        this.props.navigation.navigate("Account",{
            screen: "ManageAddr",
            params: {
                isAddrUpdate: this.state.isAddrUpdated,
            }
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
                                textValue={this.state.UserName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ firstName: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="LastName"
                                textValue={this.state.UserName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ lastName: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Address Line 1"
                                textValue={this.state.UserName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ address1: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Address Line 2"
                                textValue={this.state.UserName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ address2: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Town/City"
                                textValue={this.state.UserName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ city: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="State/Country"
                                textValue={this.state.UserName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ state: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Postal Code"
                                textValue={this.state.UserName}
                                secureText={false}
                                textStyle={{ fontSize: 10 }}
                                autoCapitalize='none'
                                onChangedTextHandler={text => {
                                    this.setState({ postalCode: text });
                                }}
                            />
                            <TextBox
                                placeHolderValue="Email"
                                textValue={this.state.UserName}
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