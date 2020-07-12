import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ThemeColor from '../../themes/colors';
import styles from './styles';

class ViewCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ViewContainerStyle}>
        <View style={styles.InnerContainerStyle}>
          <View style={styles.LeftItemContainerStyle}>
            <Text style={styles.LeftTextColor}>
              {this.props.productCount} item
              {this.props.productCount > 1 ? 's ' : ' '} |{'  '}
              <Icon name="rupee" size={10} /> {this.props.productAmount}
            </Text>
          </View>
          <View style={styles.CenterViewStyle} />
          <View style={styles.RightContainerStyle}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Cart');
              }}>
              <Text style={styles.ViewCartTextStyle}>View Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ViewCartIconStyle}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Cart');
              }}>
              <Icon
                name="shopping-cart"
                size={20}
                color={ThemeColor.DarkTextColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ViewCart;
