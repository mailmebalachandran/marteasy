import Axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
import * as Constants from '../Constants';

const LoginValidation = async userDetails => {
  let res;
  try {
    console.log("in try")
    res = await Axios.post(Constants.LoginAPI, userDetails);
    AsyncStorage.setItem('userAuth', JSON.stringify(res.data));
    console.log("in try end")
    return JSON.parse(
      '{"message":"Logged in successfully", "isValidated":true}'
    );
  } catch (err) {
    console.log("in catch")
    return JSON.parse('{"message":"Invalid Credentials", "isValidated":false}');
  }
};

export default {LoginValidation};
