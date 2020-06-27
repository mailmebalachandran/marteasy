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
              <View style={styles.minusViewStyle}>
                <Icon name="minus" size={15} style={{marginTop: 5}} />
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
              <View style={styles.plusViewStyle}>
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
