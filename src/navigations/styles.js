import { StyleSheet} from "react-native";
import * as ThemeColor from "../themes/colors"


const styles=StyleSheet.create({
    drawerContainer:{
        flex: 1,
    },
    drawerHeader:{
        flex: 1,
        flexDirection: "row",
    },
    drawerHeaderImages:{
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    userDetail:{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    name:{
        fontSize:17,
        textTransform: "capitalize"
    },
    email:{
        fontSize:17,
        textTransform: "lowercase",
        color: "green"
    },
    drawerSection:{
        flex: 6,
    },
    drawerFooter:{
        flex: 0.5,
        flexDirection: "row",
        backgroundColor: ThemeColor.PrimaryColor,
        color: "white"
    }
})

export default styles;