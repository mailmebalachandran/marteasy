import Axios from 'axios';
import * as Constants from '../Constants';

const getMotorProducts= async (id) =>{
    let res;
    try{
      res=await Axios.get('https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v3/products?tag='+id);
      return res.data;
    }
    catch(err){
      return {isError: "true"}
    }
  }

  const getMotorProductId= async (id) =>{
    let res;
    try{
      res=await Axios.get(Constants.GLOBAL_VALUE+'/wp-json/wc/v3/products/'+id+'/variations');
      return res.data;
    }
    catch(err){
      return {isError: "true"}
    }
  }  
  module.exports = {
    getMotorProducts,
    getMotorProductId
  };
  