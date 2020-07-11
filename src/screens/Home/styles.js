import { StyleSheet } from 'react-native';
import * as ThemeColor from "../../themes/colors";
const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: "#ffffff",
        marginRight: 10,
    },
    titleText: {
        marginLeft: 10,
        marginTop: 20,
        fontFamily: 'notoserif',
        fontWeight: '400',
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "#E5F4F9",
        paddingTop: "3%",
        paddingBottom: "3%",
    },
    //Category Styles
    mainCategoryContainer: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        alignItems: "center",
        backgroundColor: "#dfdfdf",
        marginTop: "5%",
    },
    otherCategoryContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        alignItems: "center",
        backgroundColor: "#dfdfdf",
    },
    mainCategory: {
        marginBottom: "2%",
    },
    categoryItemContainer2Col: {
        backgroundColor: "#ffffff",
        width: "49%",
        margin: "0.3%",
        paddingTop: "3%",
        paddingBottom: "3%",
    },
    categoryItemContainer: {
        backgroundColor: "#ffffff",
        width: "32%",
        margin: "0.3%",
        paddingTop: "3%",
        paddingBottom: "3%",
    },
    categoryName: {
        textAlign: 'center',
        color: "#000000",
        fontWeight: 'bold',
    },
    //Promo
    promoContainer: {
        flex: 1,
        marginTop: "1%",
    },
    promoImage: {
        height: 200,
        width: "100%",
        resizeMode: 'contain',
    }
});

export default styles;