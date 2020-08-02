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
        <View style={styles.addViewStyle}>
          <TouchableOpacity
            onPress={() => {
              this.props.onAddHandler(this.props.productValue);
            }}>
            <Text style={styles.addTextStyle}>ADD</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      bindingValues = (
        <>
        <View style={{flex: 1, flexDirection: "row"}}>
          <View>
            <TouchableOpacity
              onPress={() =>
                this.props.handleQuantityChange(this.props.productValue, 'DEC')
              }>
              <View style={styles.minusPlusViewStyle}>
                <Icon name="minus" size={13} style={styles.addBtnIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.textViewStyle}>
            <Text style={styles.textTextStyle}>
              {this.props.productValue.count}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                this.props.handleQuantityChange(this.props.productValue, 'INC')
              }>
              <View style={styles.minusPlusViewStyle}>
                <Icon name="plus" size={13} style={styles.addBtnIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </>
      );
    }
    return <>{bindingValues}</>;
  }
}

export default AddCart;
