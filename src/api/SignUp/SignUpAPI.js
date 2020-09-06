import Axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
import * as Constants from '../Constants';

const registerUser = async userDetails => {
  let res;
  var config = {
    method: 'post',
    url: Constants.GLOBAL_VALUE+'/wp-json/wp/v2/users',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWFydGVhc3kudmFzYW50aGFtdmVsaXllZXRhZ2FtLmNvbSIsImlhdCI6MTU5OTMyMjYyMiwibmJmIjoxNTk5MzIyNjIyLCJleHAiOjE1OTk5Mjc0MjIsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.-F4d1NVdY2wEZNQgdgStrQ3iS-_LN71zlYMCcFJ7_sg',
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

const generateOTP = async (mobileNum, username) => {
  let res;
  const template = "Hello " + username + ", Thank You for Registering With MartEasy." +
    "Your OTP to complete registration is [otp]";
  var config = {
    method: 'post',
    url: Constants.OTP_GATEWAY_URL+'/api/mverify.json?'+
    'apikey='+Constants.OTP_GATEWAY_API_KEY+
    '&sender='+Constants.OTP_SENDER+
    '&mobileno='+mobileNum+
    '&template='+template
  };
  try {
    res = await Axios(config);
    return { "message": "Registered successfully", "isValidated": true }

  } catch (err) {
    return { "message": err.response.data.message, "isValidated": false };
  }
};

const validateOTP = async (mobileNum, otp) => {
  console.log("in validateOTP",mobileNum,otp);
  let res;
  var config = {
    method: 'get',
    url: Constants.OTP_GATEWAY_URL+'/api/mverify.json?'+
    'apikey='+Constants.OTP_GATEWAY_API_KEY+
    '&mobileno='+mobileNum+
    '&code='+otp
  };
  try {
    res = await Axios(config);
    if(res.data.description.desc.includes("not")) {
      return { "message": "Invalid OTP, please Try Again.", "isValidated": false };
    } else {
      console.log("in suc",res.data.description);
      return { "message": "Registered successfully", "isValidated": true };
    }
  } catch (err) {
    return { "message": err.response.data.message, "isValidated": false };
  }
};

export default { 
  registerUser,
  generateOTP,
  validateOTP
};
