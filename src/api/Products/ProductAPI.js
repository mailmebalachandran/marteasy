import Axios from 'axios';
import * as Constants from '../Constants';

export default ProductAPI = async storeId => {
  try {
    const { data } = await Axios.get(Constants.GetProductsAPI+storeId+"/products");
    return data;
  } catch (err) {
      return err;
  }
};
