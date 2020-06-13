import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import * as Config from '../../themes/config';
import * as ThemeColor from '../../themes/colors';

class ButtonComponent extends Component {
  render() {
    let buttonType =
      Config.ButtonType === 'outline'
        ? 'outline'
        : Config.ButtonType === 'solid'
        ? 'Solid'
        : 'clear';
    let Color =
      Config.Theme === 'Dark'
        ? ThemeColor.DarkColor
        : Config.Theme === 'Light'
        ? ThemeColor.LightColor
        : ThemeColor.PrimaryColor;
    return (
      <Button
        title={this.props.titleValue}
        type={buttonType}
        onPress={this.props.onPressHandler}
        buttonStyle={{borderColor:Color, borderWidth:1, borderStyle:'solid'}}
        titleStyle={{color:Color}}
        containerStyle={{margin:10}}
        raised={true}
      />
    );
  }
}

export default ButtonComponent;
