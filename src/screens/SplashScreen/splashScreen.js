import React ,{Component}from "react";
import {View,Image,Text} from "react-native";
import {SPLASH_SCREEN} from "../../assets/index";


class SplashScreen extends Component{
    render(){
        console.log("spalsh");
        return(
            <View style={{flex: 1,justifyContent:"center",alignItems:'center'}}>
                <Image source={SPLASH_SCREEN} style={{width: "70%",height: "100%",resizeMode: "contain"}}/>
            </View>
        )
    }
}

export default SplashScreen;