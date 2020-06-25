import { StyleSheet } from "react-native"
import * as Theme from "../../themes/colors"

const styles = StyleSheet.create({
    //Component Styles
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
        fontSize: 15
    },
});

export default styles;