import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import * as Config from '../../themes/config';
import * as ThemeColor from '../../themes/colors';
import styles from './styles';

class ButtonComponent extends Component {
  render() {
    let buttonType =
      Config.ButtonType === 'outline'
        ? 'outline'
        : Config.ButtonType === 'solid'
        ? 'Solid'
        : 'clear';
    return (
      <Button
        title={this.props.titleValue}
        type={buttonType}
        onPress={this.props.onPressHandler}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        containerStyle={styles.buttonContainerStyle}
        raised={true}
      />
    );
  }
}

export default ButtonComponent;
