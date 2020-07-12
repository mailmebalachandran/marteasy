import React from 'react';
import {Text} from 'react-native';
import {Overlay} from 'react-native-elements';
import * as Constants from './constants';

class LoginErrorOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Overlay isVisible={true} onBackdropPress={() => {}}>
        <Text>{Constants.LOGIN_OVERLAY}</Text>
      </Overlay>
    );
  }
}

export default LoginErrorOverlay;
