import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from './styles';

class Label extends Component {
  render() {
    return <Text style={styles.labelStyle}>{this.props.labelValue}</Text>;
  }
}

export default Label;
