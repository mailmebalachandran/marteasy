import React, { Component } from 'react';
import { View, Image, ActivityIndicator, Text, TouchableNativeFeedback } from 'react-native';
import TextBox from '../../components/TextBox/TextBox';
import Label from '../../components/Label/Label';
import styles from './styles';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import ButtonComponent from '../../components/Button/Button';
import LoginAPI from '../../api/Login/LoginAPI';
import Validation from '../../validation/Login/LoginValidation';
import Toast, { DURATION } from 'react-native-easy-toast';
import { LOGO } from '../../assets/index';
import * as ThemeColor from '../../themes/colors';
import * as Constants from './constants';

class LoginScreen extends Component {
  state = {
    UserName: '',
    Password: '',
    IsLoaded: false,
  };

  onSubmitHandler = async () => {
    this.setState({ IsLoaded: true });
    const userDetails = {
      username: this.state.UserName,
      password: this.state.Password,
    };
    let validationResult = Validation.LoginValidation(userDetails);
    if (validationResult.isValidated) {
      let result = await LoginAPI.LoginValidation(userDetails);
      console.log()
      if (!result.isValidated) {
        this.refs.toast.show(result.message, DURATION.LENGTH_LONG);
      } else {
        this.props.navigation.navigate('HomeScreen');
      }
      this.setState({ IsLoaded: false });
    } else {
      this.refs.toast.show(validationResult.message, DURATION.LENGTH_LONG);
      this.setState({ IsLoaded: false });
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.state.IsLoaded && (
          <ActivityIndicator size="large" color={ThemeColor.DarkColor} />
        )}
        <StatusBarComponent styleType={0} />
        <View style={styles.logoStyle}>
          <Image source={LOGO} />
        </View>
        <Label labelValue={Constants.LABEL_USERNAME} />
        <TextBox
          placeHolderValue={Constants.PLACEHOLDER_USERNAME}
          textValue={this.state.UserName}
          IsHavingIcon={true}
          iconName="user"
          iconSize={25}
          iconColor={ThemeColor.DarkColor}
          secureText={false}
          textStyle={{ fontSize: 10 }}
          autoCapitalize="none"
          onChangedTextHandler={text => {
            this.setState({ UserName: text });
          }}
        />
        <Label labelValue={Constants.LABEL_PASSWORD} />
        <TextBox
          placeHolderValue={Constants.PLACEHOLDER_PASSWORD}
          textValue={this.state.Password}
          IsHavingIcon={true}
          iconName="lock"
          iconSize={25}
          iconColor={ThemeColor.DarkColor}
          secureText={true}
          autoCapitalize="none"
          onChangedTextHandler={text => {
            this.setState({ Password: text });
          }}
        />
        <View style={{ flex: 0.14, flexDirection: "row", marginTop: "5%" }}>
          <View style={{ flex: 1 }}>
            <ButtonComponent
              titleValue={Constants.BUTTON_LOGIN}
              onPressHandler={this.onSubmitHandler}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ButtonComponent
              titleValue={Constants.BUTTON_CANCEL}
              onPressHandler={() => {
                this.props.navigation.navigate('HomeScreen');
              }}
            />
          </View>
          </View>


          <View style={{ flex: 0.01, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
            <Text style={{ fontSize: 17, color: "gray" }}>New User</Text>
            <TouchableNativeFeedback style={{ marginLeft: "10%" }} onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={{ fontSize: 18, marginLeft: 5, color: "green", textDecorationLine: "underline" }}>SignUp</Text>
            </TouchableNativeFeedback>
          </View>
          <Toast
            ref="toast"
            style={{ backgroundColor: 'green' }}
            position="top"
            positionValue={30}
            fadeInDuration={750}
            fadeOutDuration={5000}
            opacity={0.8}
            textStyle={{ color: 'white' }}
          />
        </View>
    );
  }
}

export default LoginScreen;
