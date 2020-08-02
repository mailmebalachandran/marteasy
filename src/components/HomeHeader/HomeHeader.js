import React, { Component } from 'react';
import styles from './styles';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { LOGO } from "../../assets/index";
import Icon from 'react-native-vector-icons/Feather';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { headerTitle } = this.props;
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity
                    onPress={
                        () => {
                            console.log("pressed")
                            this.props.navigation.openDrawer()
                        }
                    }
                    style={styles.logoContainer}
                >
                    <Icon name="menu" style={[styles.navIcon]} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    {/* <Text style={styles.titleStyle}>{this.props.headerTitle}</Text> */}
                    <Image style={styles.logo} source={LOGO} />
                </View>
                <TouchableOpacity
                    onPress={
                        () => this.props.navigation.navigate('Search')
                    }
                    style={styles.rightIconContainer}
                >
                    <Icon name="search" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeHeader;
