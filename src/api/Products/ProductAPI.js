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

export default {GetProductBasedonStoreId, GetStoreBasedonStoreId};
