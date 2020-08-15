import { StyleSheet } from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        backgroundColor: ThemeColor.BackgroundColorLight,
        shadowColor: '#4f4f4f',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        height: "4%",
        alignItems: "center",
        paddingLeft: "2%",
        paddingTop: "7%",
        paddingBottom: "7%",
    },
    logoContainer: {
        width: "33%",
    },
    titleContainer: {
        width: "33%",
    },
    rightIconContainer: {
        width: "33%",
    },
    navIcon: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: "5%",
    },
    logo: {
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    titleStyle: {
        color: "#000000",
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "100",
        fontWeight: "500"
    },
    searchIcon: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "flex-end",
        padding: "10%",
    }
});

export default styles;
