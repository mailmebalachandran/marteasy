import React, {Component} from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ThemeColor from '../../themes/colors';

class AddCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bindingValues;
    if (this.props.productValue.isAdd) {
      bindingValues = (
        <View style={{width: 75, height: 35}}>
          <TouchableOpacity
            onPress={() => {
              this.props.onAddHandler(this.props.productValue);
            }}>
            <Text style={styles.addTextStyle}>Add</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      bindingValues = (
        <>
          <View>
            <TouchableOpacity
              onPress={() =>
                this.props.handleQuantityChange(this.props.productValue, 'DEC')
              }>
              <View
                style={{
                  backgroundColor:'#ededed',
                  borderColor: ThemeColor.DarkColor,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  padding: 5,
                  height: 35,
                  borderRightColor: ThemeColor.DarkTextColor,
                  borderRightWidth:0,
                }}>
                <Icon name="minus" size={15} style={{marginTop: 5}} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
             
              borderColor: ThemeColor.DarkColor,
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 5,
              height: 35,
              borderLeftColor: ThemeColor.DarkTextColor,
              borderRightColor: ThemeColor.DarkTextColor,
              borderLeftWidth:0,
              borderRightWidth:0,
              borderRightWidth: 0,
            }}>
            <Text style={{margin: 5, marginTop: 0}}>
              {this.props.productValue.count}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                this.props.handleQuantityChange(this.props.productValue, 'INC')
              }>
              <View
                style={{
                  backgroundColor:'#e9fae8',
                  borderColor: ThemeColor.DarkColor,
                  borderLeftColor: ThemeColor.DarkTextColor,
                  borderLeftWidth:0,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  padding: 5,
                  height: 35,
                }}>
                <Icon name="plus" size={15} style={{marginTop: 5}} />
              </View>
            </TouchableOpacity>
          </View>
        </>
      );
    }
    return <>{bindingValues}</>;
  }
}

export default AddCart;
