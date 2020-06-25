import Axios from 'axios';
import * as Constants from '../Constants';

const GetStores = async storeId => {
  let res;
  try {
    res = await Axios.get(Constants.GetShopsAPI);
    return res.data;
  } catch (err) {
    console.log(JSON.stringify(err))
    return JSON.parse('{"isError" : true}');
  }
};

export default {GetStores};
