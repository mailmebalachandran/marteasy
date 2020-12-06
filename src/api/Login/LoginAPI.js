import Axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
import * as Constants from '../Constants';
import { isUserLoggedIn } from '../../utils';

const LoginValidation = async userDetails => {
  let res;
  try {
    res = await Axios.post(Constants.LoginAPI, userDetails);
    const userType = await Axios.get(Constants.GLOBAL_VALUE +
      '/wp-json/custom-api/v1/store/user?email=' + res.data.user_email);
    await isUserLoggedIn();
    AsyncStorage.setItem('userAuth', JSON.stringify(res.data));
    return { message: "Logged in successfully", isValidated: true, isStoreUser: userType.data[0].meta_value}
  } catch (err) {
    return JSON.parse('{"message":"Invalid Credentials", "isValidated":false}');
  }
};

export default { LoginValidation };
