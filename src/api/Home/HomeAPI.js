import Axios from 'axios';
import * as Constants from '../Constants';

const GetStores = async storeId => {
  let res;
  try {
    res = await Axios.get(Constants.GetShopsAPI);
    return res.data;
  } catch (err) {
    return JSON.parse('{"message":"Something went wrong", "isValid":false}');
  }
};

const GetCategories = async storeId => {
  let res;
  try {
    res = await Axios.get(Constants.GetCategoriesAPI, {
      params: {consumer_key: Constants.CONSUMER_KEY,consumer_secret: Constants.CONSUMER_SECRET}});
    return res.data;
  } catch (err) {
    return JSON.parse('{"message":"Something went wrong", "isValid":false}');
  }
};

export default {GetStores, GetCategories};
