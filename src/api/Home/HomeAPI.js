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

const getParentCategories = async () => {
  let res;
  try {
    res = await Axios.get(Constants.GLOBAL_VALUE+'/wp-json/wc/v3/products/categories?parent=0&per_page=99');
    return res.data;
  } catch (err) {
    return JSON.parse('{"isError" : true}');
  }
}

const getConstants= async () =>{
  let res;
  try{
    res=await Axios.get(Constants.getConstants);
    return res.data;
  }
  catch(err){
    return {isError: true}
  }
}

const getTagDetails= async (id) =>{
  let res;
  try{
    res=await Axios.get(Constants.GLOBAL_VALUE+'/wp-json/wc/v3/products/tags/'+id);
    return res.data;
  }
  catch(err){
    return {isError: "true"}
  }
} 

const getSeasonMustHaveDetails= async (id) =>{
  let res;
  try{
    res=await Axios.get(Constants.GLOBAL_VALUE+'/wp-json/wc/v3/products/categories?parent='+id);
    return res.data;
  }
  catch(err){
    return {isError: "true"}
  }
} 

module.exports = {
  GetStores,
  getParentCategories,
  getConstants,
  getTagDetails,
  getSeasonMustHaveDetails
};
