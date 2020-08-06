import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  addTextStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: 'green',
    borderRadius: 1,
    borderWidth: 1,
  },
  addViewStyle: {
    width: 75,
    height: 35,
  },
  minusViewStyle: {
    backgroundColor: '#ededed',
    borderColor: ThemeColor.DarkColor,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    height: 35,
    borderRightColor: ThemeColor.DarkTextColor,
    borderRightWidth: 0,
  },
  textViewStyle: {
    borderColor: ThemeColor.DarkColor,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    height: 35,
    borderLeftColor: ThemeColor.DarkTextColor,
    borderRightColor: ThemeColor.DarkTextColor,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRightWidth: 0,
  },
  textTextStyle: {
    margin: 5,
    marginTop: 0,
  },
  plusViewStyle: {
    backgroundColor: '#e9fae8',
    borderColor: ThemeColor.DarkColor,
    borderLeftColor: ThemeColor.DarkTextColor,
    borderLeftWidth: 0,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    height: 35,
  },
  productCompContainer: {
    height: '100%',
  },
  productContainer: {
    height: 125,
    margin: 10,
    padding: 10,
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
  },
  productDesc: {
    marginLeft: 10,
    fontSize: 10,
    flexWrap: 'wrap',
    width: '100%',
  },
  pricingContainer: {
    width: '50%',
  },
  regularPrice: {
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: 'red',
  },
  salePrice: {
    marginLeft: 10,
    color: 'green',
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
  addCartOuterViewContainerStyle: {
    marginTop: 10,
    width: '35%',
  },
  promoContainer: {
    flex: 1,
    marginTop: "1%",
},
titleText: {
  margin: 10,
  fontWeight: '400',
  fontSize: 20,
  textAlign: "center",
  backgroundColor: "#E5F4F9",
  paddingTop: "3%",
  paddingBottom: "3%",
},
});

export default styles;
