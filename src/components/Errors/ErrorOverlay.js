import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { INTERNALERROR, NO_INTERNET } from "../../assets/index";
import ButtonComponent from '../Button/Button'
import styles from "./styles";

class LoginErrorOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            errorType: props.errorType
        }
    }
    render() {
        console.log("con in overlay", this.state.isConnected)
        return (
            <View>
                {!this.props.isConnected ? (
                    <Overlay isVisible={this.props.isConnected} onBackdropPress={() => { }}>
                        <View style={styles.padding30}>
                            <View style={styles.imgViewStyle}>
                                { this.props.errorType === 'NetWork' ? <Image style={{width:250, height:200}} source={NO_INTERNET} />:
                                    <Image source={INTERNALERROR} />
                                }
                            </View>
                            { this.props.errorType === 'NetWork' ? <Text style={styles.errorHeader}>No Internet please check your internet connection</Text>: 
                            <View>
                            <Text style={styles.errorHeader}>We have an internal {'\n'} server error</Text>
                            <Text style={styles.errorSubText}>Please try again later</Text>

                            <ButtonComponent
                                titleValue={"Retry"}
                                onPressHandler={this.props.reload}
                            />
                            </View>
                            }
                        </View>
                    </Overlay>
                ) : null}
            </View>
        )
    }
}

export default LoginErrorOverlay;