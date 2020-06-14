import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import TextBox from '../../components/TextBox/TextBox';
import Label from '../../components/Label/Label';
import styles from './styles';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import ButtonComponent from '../../components/Button/Button';
import LoginAPI from '../../api/Login/LoginAPI';
import Validation from '../../validation/Login/LoginValidation';
import Toast, {DURATION} from 'react-native-easy-toast';
import { LOGO } from '../../assets/index';
import * as ThemeColor from '../../themes/colors';

class LoginScreen extends Component {
  state = {
    UserName: '',
    Password: '',
    IsLoaded: false
  };

  onSubmitHandler = async () => {
    this.setState({IsLoaded: true});
    const userDetails = {
      username: this.state.UserName,
      password: this.state.Password,
    };
    let validationResult = Validation.LoginValidation(userDetails);
    if (validationResult.isValidated) {
      let result = await LoginAPI.LoginValidation(userDetails);
      if (!result.isValidated) {
        this.refs.toast.show(result.message, DURATION.LENGTH_LONG);
      }else{
        this.props.navigation.navigate('Home');
      }
      this.setState({IsLoaded: false});
    }
    else{
      this.refs.toast.show(validationResult.message, DURATION.LENGTH_LONG);
      this.setState({IsLoaded: false});
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.state.IsLoaded && <ActivityIndicator size='large' color={ThemeColor.DarkColor} />}
        <StatusBarComponent styleType={0} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={LOGO} />
        </View>
        <Label labelValue="Username" />
        <TextBox
          placeHolderValue="Username"
          textValue={this.state.UserName}
          IsHavingIcon={true}
          iconName="user"
          iconSize={25}
          iconColor="#087f23"
          secureText={false}
          textStyle={{fontSize: 10}}
          onChangedTextHandler={text => {
            this.setState({UserName: text});
          }}
        />
        <Label labelValue="Password" />
        <TextBox
          placeHolderValue="Password"
          textValue={this.state.Password}
          IsHavingIcon={true}
          iconName="lock"
          iconSize={25}
          iconColor="#087f23"
          secureText={true}
          onChangedTextHandler={text => {
            this.setState({Password: text});
          }}
        />
        <ButtonComponent
          titleValue="Login"
          onPressHandler={this.onSubmitHandler}
        />
        <Toast
          ref="toast"
          style={{backgroundColor: '#dfdfdf'}}
          position="top"
          positionValue={100}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color: 'black'}}
        />
      </View>
    );
  }
}

export default LoginScreen;
