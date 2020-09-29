import { StyleSheet } from "react-native";
import * as Theme from "../../themes/colors";
const styles = StyleSheet.create({
    //Containers
    continerStyles: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 50,
        flex: 1,
        height: "100%",
    },
    innerContainer: {
        marginLeft: "5%",
        marginRight: "5%",
        flex: 1,
        height: "100%",
    },
    manageAddrLeftContainer: {
        width: "90%",
    },
    manageAddrRightContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        width: "10%",
        marginTop: "5%",
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
    },
    flexRow: {
        flexDirection: 'row',
        flex: 1,
        width: "100%",
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
    },
    dot: {
        fontSize: 20,
    },
    //Order Listing
    orderSectionTitleContainer: {
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        backgroundColor: '#efefef',
        marginLeft: "-5%",
        marginRight: "-5%",
        marginTop: "7%",
    },
    orderSectionTitle: {
        color: Theme.DarkColor,
        fontSize: 13,
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
    logoutBtnContainer: {
        flex: 0.5,
        borderRadius: 0,
    },
    logoutBtn: {
        backgroundColor: Theme.DarkColor,
        borderRadius: 0,
    },
    //Login Error Styles
    loginErrorConatiner: {
        backgroundColor: '#fafafa',
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    errorHeader: {
        fontSize: 24,
        fontWeight: "bold"
    },
    errorSubText: {
        fontSize: 18,
        marginTop: "5%",
        marginBottom: "5%",
    },
    //No Orders
    noOrdersErrContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
        marginBottom: "10%",
    },
    noOrdersErrText: {
        fontSize: 18,
        marginTop: "0.5%",
    }

})

export default styles;