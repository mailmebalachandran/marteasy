import React, {Component} from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
              this.props.navigation.openDrawer();
            }}>
            <Icon name="bars" size={32} color={ThemeColor.PrimaryTextColor} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.5, justifyContent:'center'}}>
          <Text>{this.props.titleValue}</Text>
        </View>
        <View style={styles.addToCartContainerStyle}>
          <View>
          <Avatar rounded icon={{ name: 'shopping-cart', size:35 }} />
            <Badge
              containerStyle={{position: 'absolute', top: -5, right: 25}}
              value="5"
              badgeStyle={{backgroundColor:'red'}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
