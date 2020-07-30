import Axios from 'axios';
import * as Constants from '../Constants';

const GetProductBasedonStoreId = async storeId => {
  try {
    const {data} = await Axios.get(
      Constants.GetProductsAPI + storeId + '/products',
    );
    for(var item in data){
      if(data[item].sale_price === '' || data[item].sale_price === undefined || data[item].sale_price === null){
        data[item].sale_price = data[item].regular_price;
        data[item].regular_price = '';
      } 
    }
    return data;
  } catch (err) {
    return JSON.parse('{"isError" : true}');
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

const GetSubcategoryBasedOnStore = async storeId => {
  try {
    const {data} = await Axios.get(Constants.getSubCategoryBasedOnStoreAPI + storeId);
    return data;
  } catch (err) {
    return err;
  }
};

const getProductsBasedOnStoreSubcategory = async (storeId, catId) => {
  try {
    const {data} = await Axios.get(Constants.getProductsBasedOnStoreSubcategoryAPI+'store_id='+storeId+'&catagory_id=' + catId);
    return data;
  } catch (err) {
    return err;
  }
};

const getProductsDataBasedOnStoreSubcategory = async products => {
  try {
    const url =
      Constants.CartGetProductsAPI +
      Constants.CONSUMER_KEY +
      '&consumer_secret=' +
      Constants.CONSUMER_SECRET +
      '&include=' +
      products;
    const {data} = await Axios.get(url);
    for(var item in data){
      if(data[item].sale_price === '' || data[item].sale_price === undefined || data[item].sale_price === null){
        data[item].sale_price = data[item].regular_price;
        data[item].regular_price = '';
      } 
    }
    return data;
  } catch (err) {
    return JSON.parse('{"isError" : true}');
  }
};




export default {GetProductBasedonStoreId, GetStoreBasedonStoreId, GetSubcategoryBasedOnStore,getProductsBasedOnStoreSubcategory,
  getProductsDataBasedOnStoreSubcategory,};
