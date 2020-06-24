import React, {Component} from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.containerStyle}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(this.props.navigation);
            }}>
            <Icon iconStyle={styles.navIcon} name="arrow-left" size={20} color='black' />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

export default ProfileHeader;
