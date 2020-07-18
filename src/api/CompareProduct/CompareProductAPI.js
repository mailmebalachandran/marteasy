import Axios from 'axios';
import * as Constants from '../Constants';

const GetCompareProducts = async tagId => {
  try {
    const url =
      Constants.CompareProductsAPI + tagId + "&consumer_key="+
      Constants.CONSUMER_KEY +
      '&consumer_secret=' +
      Constants.CONSUMER_SECRET
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

const GetProductBasedonProductId = async productId => {
    try {
        const url =
        Constants.GetProductBasedOnProductIdAPI + productId + "?consumer_key="+
        Constants.CONSUMER_KEY +
        '&consumer_secret=' +
        Constants.CONSUMER_SECRET
      const {data} = await Axios.get(url);
      // for(var item in data){
      //   if(data[item].sale_price === '' || data[item].sale_price === undefined || data[item].sale_price === null){
      //     data[item].sale_price = data[item].regular_price;
      //     data[item].regular_price = '';
      //   } 
      // }
      return data;
    } catch (err) {
      return JSON.parse('{"isError" : true}');
    }
  };

export default {GetCompareProducts, GetProductBasedonProductId};
