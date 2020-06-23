import Axios from 'axios';
import * as Constants from '../Constants';

const GetProductBasedOnSearch = async searchValue => {
    try {
      const {data} = await Axios.get(Constants.SearchProductsAPI + searchValue, {
        params: {consumer_key: Constants.CONSUMER_KEY,consumer_secret: Constants.CONSUMER_SECRET}});
      return data;
    } catch (err) {
      return err;
    }
};

export default {GetProductBasedOnSearch};
