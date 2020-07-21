import Axios from 'axios';
import * as Constants from '../Constants';

const GetCartDetails = async products => {
  console.log("prod",products);
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

export default {GetCartDetails};
