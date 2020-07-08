import Axios from 'axios';
import {AsyncStorage} from 'react-native';
import * as Constants from '../Constants';

const SignUpValidation = async userDetails => {
  let res;
  try {
    res = await Axios.post(Constants.SignUpAPI, userDetails);
    AsyncStorage.setItem('userAuth', JSON.stringify(res.data));
    return JSON.parse(
      '{"message":"Registered successfully", "isValidated":true}'
    );
  } catch (err) {
    return JSON.parse('{"message":"Invalid Credentials", "isValidated":false}');
  }
};

export default {SignUpValidation};
