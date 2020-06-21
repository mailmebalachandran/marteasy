import React, {Component} from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bindingValues;
    if (this.props.productValue.isAdd) {
      bindingValues = (
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.onAddHandler(this.props.productValue);
            }}>
            <Text
              style={styles.addTextStyle}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
        bindingValues = (<>
        <View>
          <TouchableOpacity
            onPress={() => this.props.handleQuantityChange(this.props.productValue, 'DEC')}>
            <View>
              <Icon name="minus" size={25} style={{marginTop: 5}} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{margin: 5}}>{this.props.productValue.count}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.handleQuantityChange(this.props.productValue, 'INC')}>
            <View>
              <Icon name="plus" size={25} style={{marginTop: 5}} />
            </View>
          </TouchableOpacity>
        </View>
      </>);
    }
    return <>{bindingValues}</>;
  }
}

export default AddCart;
