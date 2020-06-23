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
    flex1: {
        flex:1,
    },
    orderSectionTitleContainer: {
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        backgroundColor: '#efefef',
        marginLeft: "-5%",
        marginRight: "-5%",
        marginTop: "7%",
        // justifyContent: "center",
        // alignItems: "center",
    },
    orderSectionTitle: {
        color: Theme.DarkColor,
        fontSize: 18,
    },
    btnContainer: {
        flex: 1,
        flexDirection: "row",
    }

})

export default styles;