import Axios from 'axios';
import * as Constants from '../Constants';

const GetProductBasedonStoreId = async storeId => {
  try {
    const {data} = await Axios.get(
      Constants.GetProductsAPI + storeId + '/products',
    );
    return data;
  } catch (err) {
    return err;
  }
};

const GetStoreBasedonStoreId = async storeId => {
  try {
    const {data} = await Axios.get(Constants.GetProductsAPI + storeId);
    return data;
  } catch (err) {
    return err;
  }
};

const GetProductBasedonCategoryId = async categoryId => {
  try {
    console.log('Step1')
    const {data} = await Axios.get(
      Constants.GetProductByCategoryAPI + categoryId, {
        params: {consumer_key: Constants.CONSUMER_KEY,consumer_secret: Constants.CONSUMER_SECRET}});
        console.log('Step2')
    return data;
  } catch (err) {
    console.log('Step3')
    return err;
  }
};


export default {GetProductBasedonStoreId, GetStoreBasedonStoreId, GetProductBasedonCategoryId};
