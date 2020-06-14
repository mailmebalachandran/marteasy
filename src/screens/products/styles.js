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
        height: 300,
    },
    cardTitle: {
        color: "black",
        fontSize: 25,
    },
    cardContentContainer: {
        padding:0,
        margin: 0,
        height: 150,
    },
    productImage: {
        height: 100,
        width: 100,
    },
    pricingContainer: {
        padding: 0,
        margin: 0,
        shadowColor: 'white',
        shadowOpacity: 0,
        borderWidth: 0,
    },
    pricingTitle: {
        height: 0,
    }
});

export default styles;