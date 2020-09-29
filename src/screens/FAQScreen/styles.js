import { View, StyleSheet, Text, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container:{
        
    },
    heading: {
        marginTop: "10%",
        marginLeft: "5%",
        textTransform: "capitalize",
        fontWeight: "bold",
        textAlign: "center"
    },
    uppercaseHeading: {
        marginTop: "10%",
        marginLeft: "5%",
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    question: {
        marginTop: "10%",
        marginLeft: "5%",
        textTransform: "capitalize",
        fontWeight: "bold",
    },
    answer: {
        marginTop: "5%",
        marginLeft: "5%",
        marginRight: "5%"
    },
    singleparagraph: {
        marginTop: "1%",
        marginLeft: "5%",
        marginRight: "5%"
    },
    mobileNumber: {
        fontWeight: "bold",
        // color: "#689f38",
        fontSize: 17
    },
    email: {
        color: "#689f38",
        textDecorationLine: "underline"
    },
    lastLine: {
        marginTop: "1%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "20%"
    },
    mainHeadingAfterQuestion:{
        marginTop: "5%",
        marginLeft: "5%",
        textTransform: "capitalize",
        fontWeight: "bold",
    }
})

export default styles;
