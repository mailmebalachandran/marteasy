import Axios from 'axios';
import * as Constants from '../Constants';

const GetCartDetails = async products => {
  try {
    const url =
      Constants.CartGetProductsAPI +
      Constants.CONSUMER_KEY +
      '&consumer_secret=' +
      Constants.CONSUMER_SECRET +
      '&include=' +
      products;
    const {data} = await Axios.get(url);
    return data;
  } catch (err) {
    return err;
  }
};

export default {GetCartDetails};
