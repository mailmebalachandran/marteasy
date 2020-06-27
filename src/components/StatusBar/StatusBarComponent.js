import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import * as ThemeColor from '../../themes/colors';

class StatusBarComponent extends Component {
  render() {
    const styleTypes = ['default', 'dark-content', 'light-content'];
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
