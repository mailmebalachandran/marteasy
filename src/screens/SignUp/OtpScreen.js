import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';
import Label from '../../components/Label/Label';
import styles from './styles';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import ButtonComponent from '../../components/Button/Button';
import SignUpAPI from '../../api/SignUp/SignUpAPI';
import Validation from '../../validation/Login/SignUp/SignUpValidation';
import Toast, { DURATION } from 'react-native-easy-toast';
import { LOGO } from '../../assets/index';
import * as ThemeColor from '../../themes/colors';
import * as Constants from './constants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import ActivityOverlay from "../../components/ActivityOverlay/ActivityOverlay";


class OtpScreen extends Component {
  state = {
    UserName: '',
    EmailAddress: '',
    Password: '',
    IsLoaded: false,
    Roles: 'customer',
    otp: ['', '', '', ''],
    focusValue: [true, false, false, false],
    isOtpValid: false,
  };

  handleOTPSubmit = async () => {
    this.setState({ IsLoaded: true });
    let mobileNum = this.props.route.params.mobileNum;
    let validationResult = this.validateOTPInputs();
    if (validationResult.isValidated) {
      let result = await SignUpAPI.validateOTP(mobileNum, validationResult.otp);
      if (!result.isValidated) {
        this.refs.toast.show(result.message, DURATION.LENGTH_LONG);
      } else {
        this.setState({ otp: ['', '', '', ''] })
        this.registerUser();
      }
    } else {
      this.refs.toast.show(validationResult.message, DURATION.LENGTH_LONG);
      this.setState({ IsLoaded: false });
    }
  };
  registerUser = async () => {
    const routeParams = this.props.route.params;
    const userDetails = {
      username: routeParams.username,
      email: routeParams.email,
      password: routeParams.password,
      mobileNum: routeParams.mobileNum,
      roles: routeParams.roles,
    };
    let result = await SignUpAPI.registerUser(userDetails);
    if (!result.isValidated) {
      this.refs.toast.show(result.message, DURATION.LENGTH_LONG);
    } else {
      this.props.navigation.navigate('Login');
    }
    this.setState({ IsLoaded: false });
  }
  validateOTPInputs = () => {
    let otpValue = '';
    this.state.otp.map(val => otpValue += val.toString());
    if (otpValue.length < 4) {
      return { isValidated: false, message: "please enter all OTP entries" }
    } else {
      return { isValidated: true, otp: otpValue }
    }
  }
  handleOtpChange = (text, index) => {
    let otp = [...this.state.otp]
    if (text.nativeEvent.key !== "Backspace") {
      otp[index] = text.nativeEvent.key;
    } else {
      otp[index] = '';
    }
    this.setState({ otp });
    let focusValue = [...this.state.focusValue];
    if (text.nativeEvent.key === "Backspace" && index > 0) {
      this[index - 1].focus();
    } else if (index <= 2 && text.nativeEvent.key !== "Backspace") {
      this[index + 1].focus();
    }
    this.setState({ focusValue })
  }
  renderOtpInputs = () => {
    return this.state.otp.map((item, index) => (
      <TextInput
        key={index}
        autoFocus={this.state.focusValue[index]}
        style={styles.otpInput}
        value={item}
        keyboardType="number-pad"
        maxLength={1}
        ref={(input) => this[index] = input}
        controlled={true}
        onKeyPress={(text) => this.handleOtpChange(text, index)}
      />
    )
    )
  }
  resendOTP = async () => {
    const { mobileNum, username } = this.props.route.params;
    this.setState({ IsLoaded: true });
    let result = await SignUpAPI.generateOTP(mobileNum, username);
    this.setState({ IsLoaded: false });
    this.refs.toast.show("Your OTP has been sent again.", DURATION.LENGTH_LONG);
  }

  render() {
    return (

      <View style={styles.containerStyle}>
        {this.state.IsLoaded && (
          <ActivityOverlay />
        )}
        <StatusBarComponent styleType={0} />
        <ScrollView>
          <View style={styles.logoStyle}>
            <Image source={LOGO} />
          </View>
          <View style={{ flex: 0.01, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
            <Text style={{ fontSize: 17, color: "gray" }}>Enter OTP sent to your mobile number</Text>
          </View>
          <View style={styles.otpContainer}>
            {this.renderOtpInputs()}
          </View>
          <View style={{ flex: 1 }}>
            <ButtonComponent
              titleValue={"Submit"}
              onPressHandler={() => {
                this.handleOTPSubmit()
              }}
            />
          </View>
          {!this.state.isOtpValid &&
            <Text style={styles.errorMsg}>
              {this.state.commonErr}
            </Text>}
          <View style={{ flex: 0.01, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
            {/* <Text style={{ fontSize: 17, color: "gray" }}>Resend OTP in </Text> */}
            <TouchableNativeFeedback
              style={{ marginLeft: "10%" }}
              onPress={() => this.resendOTP()}
            >
              <Text style={{ fontSize: 18, color: "green", textDecorationLine: "underline" }}>Resend OTP</Text>
            </TouchableNativeFeedback>
          </View>
          <Toast
            ref="toast"
            useNativeDriver={true}
            style={{ backgroundColor: ThemeColor.BRAND_SECONDARY }}
            position="top"
            positionValue={30}
            fadeInDuration={200}
            fadeOutDuration={2000}
            opacity={0.8}
            textStyle={{ color: 'white' }}
          />
        </ScrollView>
      </View>

    );
  }
}

export default OtpScreen;
