import Axios from 'axios';
import * as Constants from '../Constants';


const GetStores = async storeId => {
    let res;
    try {
      res = await Axios.get(Constants.GetShopsAPI);
      return res.data;
    } catch (err) {
      return JSON.parse('{"isError" : true}');
    }
  };
  
  const getparentSubCategories = async (catId) => {
    let res;
    try {
      res = await Axios.get(Constants.GLOBAL_VALUE+'/wp-json/wc/v3/products/categories?parent='+catId);
      return res.data;
    } catch (err) {
      return JSON.parse('{"isError" : true}');
    }
  }
  
  module.exports = {
    GetStores,
    getparentSubCategories,
  };