import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import * as Config from '../../themes/config';
import * as ThemeColor from '../../themes/colors';

class StatusBarComponent extends Component {
  render() {
    const styleTypes = ['default', 'dark-content', 'light-content'];
    let Color =
      Config.Theme === 'Dark'
        ? ThemeColor.DarkColor
        : Config.Theme === 'Light'
        ? ThemeColor.LightColor
        : ThemeColor.PrimaryColor;
    return (
      <View>
        <StatusBar
          backgroundColor={ThemeColor.PrimaryColor}
          barStyle={styleTypes[this.props.styleType]}
        />
      </View>
    );
  }
}

export default StatusBarComponent;
