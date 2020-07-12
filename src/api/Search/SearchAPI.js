import Axios from 'axios';
import * as Constants from '../Constants';

const GetProductBasedOnSearch = async searchValue => {
  try {
    const {data} = await Axios.get(Constants.SearchProductsAPI + searchValue, {
      params: {
        consumer_key: Constants.CONSUMER_KEY,
        consumer_secret: Constants.CONSUMER_SECRET,
      },
    });
    for (var item in data) {
      if (
        data[item].sale_price === '' ||
        data[item].sale_price === undefined ||
        data[item].sale_price === null
      ) {
        data[item].sale_price = data[item].regular_price;
        data[item].regular_price = '';
      }
    }
    return data;
  } catch (err) {
    return JSON.parse('{"isError" : true}');
  }
};

export default {GetProductBasedOnSearch};
