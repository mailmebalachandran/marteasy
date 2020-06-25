import React from "react";
import { View, Text } from "react-native";
import { Button, Overlay } from "react-native-elements"
class LoginErrorOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Overlay isVisible={true} onBackdropPress={() => {}}>
                <Text>Hello from Overlay!</Text>
            </Overlay>
        )
    }
}

export default LoginErrorOverlay;