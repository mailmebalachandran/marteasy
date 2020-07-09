import { StyleSheet } from 'react-native';
import { PrimaryColor } from '../../themes/colors';

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
});

export default styles;