import { StyleSheet } from 'react-native';
import { PrimaryColor } from '../../themes/colors';
import * as ThemeColor from '../../themes/colors'

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:10
    },
    cardContainer: {
        height: 200,
    },
    cardTitle: {
        color: "black",
        fontSize: 25,
    },
    cardContentContainer: {
        padding:0,
        margin: 0,
        height: 100,
    },
    productImage: {
        height: 100,
        width: 100,
        marginTop: "-10%"
    },
    pricingContainer: {
        padding: 0,
        margin: 0,
        shadowColor: 'white',
        shadowOpacity: 0,
        borderWidth: 0,
        height: 70,
        marginTop: "-40%"
    },
    pricingTitle: {
        height: 0,
    },
    priceText: {
        fontSize: 20,
        marginTop: "-1%"
    },
    description: {
        marginTop: "-5%",
    },
    wholeViewContainerStyle: {
        backgroundColor: ThemeColor.DarkTextColor,
        flex: 1,
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
});

export default styles;