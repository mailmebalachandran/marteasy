import Axios from 'axios';
import * as Constants from '../Constants';

const GetStoreBasedonStoreId = async (searchValue) => {
  try {
    const {data} = await Axios.get(Constants.SearchProductsAPI + searchValue, );
    return data;
  } catch (err) {
    return err;
  }
};

export default {GetProductBasedonStoreId, GetStoreBasedonStoreId};
