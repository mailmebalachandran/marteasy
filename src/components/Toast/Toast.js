import React, { Component } from "react";
import Toast, { DURATION } from 'react-native-easy-toast';
import * as colors from "../../themes/colors";

class CustomToast extends Component {
    render() {
        return (
            <Toast
                ref="toast"
                useNativeDriver={true}
                style={{ backgroundColor:  colors.BRAND_SECONDARY}}
                position="top"
                positionValue={30}
                fadeInDuration={200}
                fadeOutDuration={2000}
                opacity={0.8}
                textStyle={{ color: 'white' }}
            />
        )
    }
}

export default CustomToast;