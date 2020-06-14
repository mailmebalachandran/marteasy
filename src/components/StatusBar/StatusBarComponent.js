import React, {Component} from 'react';
import * as Constants from './constants';
import {StatusBar, View} from 'react-native';

class StatusBarComponent extends Component {
  render() {
    const styleTypes = ['default', 'dark-content', 'light-content'];
    return (
      <View>
        <StatusBar
          backgroundColor={Constants.statusBarBackgroundColor}
          barStyle={styleTypes[this.props.styleType]}
        />
      </View>
    );
  }
}

export default StatusBarComponent;
