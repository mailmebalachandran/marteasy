import React, {Component} from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Avatar, Badge, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
              this.props.navigation.navigate(this.props.navigationScreenValue);
            }}>
            <Icon name="arrow-left" size={32} color='black' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
