import React, {Component} from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const { mainRoute, subRoute, headerTitle } = this.props;
    return (
      <View style={styles.containerStyle}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(mainRoute,{screen: subRoute});
            }}>
            <Icon iconStyle={styles.navIcon} name="arrow-left" size={20} color='black' />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>{headerTitle}</Text>
      </View>
    );
  }
}

export default ProfileHeader;
