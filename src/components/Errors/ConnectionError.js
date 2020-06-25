import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { NO_INTERNET } from "../../assets/index";
class LoginErrorOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: props.isConnected
        }
    }
    render() {
        console.log("con in overlay",this.state.isConnected)
        return (
            <View>
                {!this.props.isConnected ? (
                    <Overlay isVisible={this.props.isConnected} onBackdropPress={() => { }}>
                        <View>
                            <Image source={NO_INTERNET} />
                        </View>
                    </Overlay>
                ) : null}
            </View>
        )
    }
}

export default LoginErrorOverlay;