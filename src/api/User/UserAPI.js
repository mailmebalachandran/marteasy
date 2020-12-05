import Axios from 'axios';
import * as Constants from '../Constants';

const CheckUserAddressAvailable = async userDetails => {
  let res;
  try {
    res = await Axios.get(Constants.CheckAddressAvailableAPI, {
      params: {
        email: userDetails.user_email
      },
    });
    return res;
  } catch (err) {
    return JSON.parse(
      '{"message":"Something went wrong", "isValidated":false}',
    );
  }
};

export default {CheckUserAddressAvailable};
