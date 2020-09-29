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
        <View key={"btnCont"+this.props.id} style={styles.addViewStyle}>
          <TouchableOpacity
            key={"bnt"+this.props.id}
            onPress={() => {
              this.props.onAddHandler(this.props.productValue);
            }}>
            <Text key={"btnTex"+this.props.id} style={styles.addTextStyle}>ADD</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      bindingValues = (
        <>
        <View key={"btnCont"+this.props.id} style={{flex: 1, flexDirection: "row"}}>
          <View key={"minusCont"+this.props.id}>
            <TouchableOpacity
              key={"minusBtn"+this.props.id}
              onPress={() =>
                this.props.handleQuantityChange(this.props.productValue, 'DEC')
              }>
              <View key={"minusBtnCont"+this.props.id} style={styles.minusPlusViewStyle}>
                <Icon key={"minusBtnIcon"+this.props.id} name="minus" size={13} style={styles.addBtnIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <View key={"prodValueCont"+this.props.id} style={styles.textViewStyle}>
            <Text key={"prodValueText"+this.props.id} style={styles.textTextStyle}>
              {this.props.productValue.count}
            </Text>
          </View>
          <View key={"plusBtnCont"+this.props.id} >
            <TouchableOpacity
              key={"plusBtnCont"+this.props.id}
              onPress={() =>
                this.props.handleQuantityChange(this.props.productValue, 'INC')
              }>
              <View key={"plusIconCont"+this.props.id}style={styles.minusPlusViewStyle}>
                <Icon key={"plusBtnIcon"+this.props.id} name="plus" size={13} style={styles.addBtnIcon} />
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
