import Axios from 'axios';
import * as Constants from '../Constants';

const PaymentCOD = async orderDetails => {
  let res;
  try {
    res = await Axios.post(Constants.PaymentCODAPI, orderDetails);
    return res.data;
  } catch (err) {
    return JSON.parse(
      '{"message":"Something went wrong", "isValidated":false}',
    );
  }
};

export default {PaymentCOD};
