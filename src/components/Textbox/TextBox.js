import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import * as ThemeColor from '../../themes/colors';
import * as Config from '../../themes/config';

class TextBox extends Component {
  render() {
    let value;
    let Color =
      Config.Theme === 'Dark'
        ? ThemeColor.DarkColor
        : Config.Theme === 'Light'
        ? ThemeColor.LightColor
        : ThemeColor.PrimaryColor;
    if (this.props.IsHavingIcon) {
      value = (
        <Input
          placeholder={this.props.placeHolderValue}
          leftIcon={
            <Icon
              name={this.props.iconName}
              size={this.props.iconSize}
              color={Color}
            />
          }
          style={this.props.textStyle}
          onChangeText={this.props.onChangedTextHandler}
          value={this.props.textValue}
          secureTextEntry={this.props.secureText}
          placeholderTextColor={ThemeColor.PlaceHolderColor}
          inputStyle={{fontSize:14}}
        />
      );
    } else {
      value = (
        <Input
          placeholder={this.props.placeHolderValue}
          style={this.props.textStyle}
          onChangeText={this.props.onChangedTextHandler}
          value={this.props.textValue}
          secureTextEntry={this.props.secureText}
          placeholderTextColor={ThemeColor.PlaceHolderColor}
          inputStyle={{fontSize:14}}
        />
      );
    }
    return value;
  }
}

export default TextBox;
