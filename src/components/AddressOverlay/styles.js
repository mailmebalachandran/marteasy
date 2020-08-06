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
        marginTop: "5%"
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
    },
    flex1: {
        flex:1,
    },
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
    btnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10%",
    },
    btnTitle: {
        marginLeft: 5,
    },
    savebtn: {
        backgroundColor: Theme.DarkColor,
        width: "75%",
    },
    cancelBtn: {
        backgroundColor: Theme.DarkColor,
        width: "75%",
        alignSelf: 'flex-end',
    },
    errorMsg: {
        color: "red",
        fontWeight: "100",
        fontSize: 15,
        marginBottom: "5%",
    }
})

export default styles;