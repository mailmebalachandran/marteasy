import Axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
import * as Constants from '../Constants';

const SignUpValidation = async userDetails => {
  let res;
  var config = {
    method: 'post',
    url: Constants.GLOBAL_VALUE+'/wp-json/wp/v2/users',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWFydGVhc3kudmFzYW50aGFtdmVsaXllZXRhZ2FtLmNvbSIsImlhdCI6MTU5NDIyMjc2MywibmJmIjoxNTk0MjIyNzYzLCJleHAiOjE1OTQ4Mjc1NjMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.mwS4cpSQisEpvt4-rTklXpzBgV2D-KRfK4KKV5yFJXA',
      'Content-Type': 'application/json'
    },
    data: userDetails
  };
  try {
    res = await Axios(config);
    return { "message": "Registered successfully", "isValidated": true }

  } catch (err) {
    return { "message": err.response.data.message, "isValidated": false };
  }
};

export default { SignUpValidation };
