import React from "react"
import { View, ActivityIndicator } from 'react-native';
import * as ThemeColor from '../../themes/colors';
import styles from "./styles";

class ActivityContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (this.props.isLoading &&
            (
                <View style={styles.activityContainer}>
                    <ActivityIndicator
                        size='large'
                        color={ThemeColor.DarkColor}
                        style={styles.activityIndicator}
                    />
                </View>
            )

        )
    }
}
export default ActivityContainer;