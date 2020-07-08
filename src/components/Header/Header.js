import React, {Component} from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Avatar, Badge, SearchBar} from 'react-native-elements';
import IconFeather from 'react-native-vector-icons/Feather';
import * as ThemeColor from '../../themes/colors';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.drawerStyle}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <IconFeather name="arrow-left" size={32} color="white" ic />
          </TouchableOpacity>
        </View>
        <View style={styles.centerViewStyle} />
        <View style={styles.rightViewStyle}>
          <Text style={styles.text}>{this.props.navigationScreenValue}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
