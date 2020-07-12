import React from "react"
import { View, ActivityIndicator } from 'react-native';
import * as ThemeColor from '../../themes/colors';
import styles from "./styles";
import { Overlay } from "react-native-elements";

class ActivityOverlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
        }
    }
    render() {
        return (
            <Overlay
                isVisible={true}
                onBackdropPress={() => {}}
                fullScreen={true}
                overlayStyle={styles.activityOverlay}
            >
                <ActivityIndicator
                    size='large'
                    color={ThemeColor.DarkColor}
                    style={styles.activityIndicator}
                />
            </Overlay>
        )
    }
}
export default ActivityOverlay;