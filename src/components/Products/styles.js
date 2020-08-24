import {StyleSheet} from 'react-native';
import * as Theme from '../../themes/colors';

const styles = StyleSheet.create({
  //Component Styles
  productScreenContainer:{
    flex: 1,
  },
  productCompContainer: {
    height: '100%',
  },
  productContainer: {
    flex: 1,
    marginTop: "0.2%",
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  //Product Image Styles
  productImageContainer: {
    height: 100,
  },
  productImage: {
    height: 100,
    width: 100,
    // borderRadius: 20,
  },
  //Products Details
  productName: {
    marginLeft: 10,
    fontSize: 17,
    textTransform: "capitalize",
    color: "#1a1a1a",
  },
  productDesc: {
    marginLeft: 10,
    fontSize: 10,
    flexWrap: 'wrap',
    width: '100%',
  },
  // pricingContainer: {
  //   width: '55%',
  // },
  // productNameContainer:{
  //   width: '55%',
  // },
  regularPrice: {
    marginLeft: 10,
    marginRight: "5%",
    textDecorationLine: 'none',
    fontSize: 13,
    color: '#8f8f8f',
  },
  salePrice: {
    marginLeft: 10,
    color: '#1a1a1a',
    fontSize: 15,
  },
  imageViewContainerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  priceViewContainerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  productViewContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  // addCartOuterViewContainerStyle: {
  //   marginTop: 10,
  //   width: '35%',
  // },
  compareTextStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    textAlign:"center",
    // borderBottomWidth: 1,
    // borderColor: 'green',
    // borderRadius: 1,
    // borderWidth: 1,
    // backgroundColor:'#cafabb',
    fontSize:11,
    color: "black"
    
  },
  addViewStyle: {
   
    height: 35,
  },
  compareViewStyle: {
    height: 30,
    backgroundColor: Theme.COMPARE_BTN_COLOR,
    borderRadius: 5
  },
  buttonContainer:{
    flex: 1, 
    width:"90%",
    marginLeft: "10%"
  }
});

export default styles;
