import { StyleSheet } from "react-native";
import * as Theme from "../../themes/colors";
const styles = StyleSheet.create({
    //Containers
    continerStyles: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 50,
    },
    innerContainer: {
        marginLeft: "5%",
        marginRight: "5%",
    },
    //Common
    divideStyles: {
        marginTop: "5%",
        height: "0.1%",
        backgroundColor: '#0f0f0f',
    },
    dividerSmall: {
        marginTop: "5%",
        marginBottom: "3%",
        height: "0.1%",
        backgroundColor: 'grey',
    },
    dividerVerymall: {
        marginTop: "5%",
        height: "0.1%",
        backgroundColor: '#0f0f0f',
    },
    heading: {
        marginTop: "5%",
        fontSize: 16,
        fontWeight: '300',
    },
    subHeading: {
        marginTop: "2%",
        fontSize: 13,
        fontWeight: '100',
        fontFamily: 'sans-serif',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flex9: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex1: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Name Text
    name: {
        marginTop: "5%",
        fontSize: 16,
        fontWeight: 'bold',
    },
    numEmail: {
        fontSize: 13,
        fontWeight: '100',
        fontFamily: 'sans-serif',
    },
    dot: {
        fontSize: 20,
    },
    //Order Listing
    orderSectionTitleContainer: {
        flexDirection: 'row',
        paddingTop: "4%",
        paddingBottom: "4%",
        paddingLeft: "5%",
        backgroundColor: '#efefef',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    orderSectionTitle: {
        color: '#4f4f4f',
        fontSize: 18,
        marginLeft: "15%",
    },
    orderDetailsContainer: {
        marginTop: "5%",
    },
    storeName: {
        fontSize: 15,
        fontWeight: '300',
        color: '#000000'
    },
    storeCity: {
        fontSize: 12,
        color: '#4f4f4f'
    },
    orderPriceContainer: {
        marginTop: "3%",
    },
    orderPrice: {
        fontSize: 12,
        fontWeight: '100',
    },
    logoutContainer: {
        flexDirection: 'row',
        marginTop: "5%",
        flex: 1,
        justifyContent: "center",
    },
    addAddrBtnContainer: {
        flex: 1,
        borderRadius: 0,
    },
    logoutBtn: {
        color: Theme.DarkColor,
        borderRadius: 0,
    },

})

export default styles;