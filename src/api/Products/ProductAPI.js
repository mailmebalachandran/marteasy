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

export default {GetProductBasedonStoreId, GetStoreBasedonStoreId};
