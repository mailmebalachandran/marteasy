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
        console.log(this.props.headerTitle);
        return (
            <View style={styles.containerStyle}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={LOGO} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{this.props.headerTitle}</Text>
                </View>
                <View style={styles.rightIconContainer}>
                    <TouchableOpacity
                        onPress={
                            () => this.props.navigation.navigate('Search')
                        }
                    >
                        <Icon name="search" style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default HomeHeader;
