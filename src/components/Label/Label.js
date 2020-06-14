import React, {Component} from 'react';
import {Text} from 'react-native';
import * as Config from '../../themes/config';
import * as ThemeColor from '../../themes/colors';

class Label extends Component {
  render() {
    let Color =
    Config.Theme === 'Dark'
      ? ThemeColor.DarkColor
      : Config.Theme === 'Light'
      ? ThemeColor.LightColor
      : ThemeColor.PrimaryColor;
    return <Text style={{marginLeft:10, fontWeight:'bold', color:Color}}>{this.props.labelValue}</Text>;
  }
}

export default Label;
