import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import {INTERNALERROR, NO_INTERNET} from '../../assets/index';
import ButtonComponent from '../Button/Button';
import styles from './styles';
import * as Constants from './constants';

class LoginErrorOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      errorType: props.errorType,
    };
  }
  render() {
    return (
      <View>
        {!this.props.isConnected ? (
          <Overlay
            isVisible={this.props.isConnected}
            onBackdropPress={() => {}}>
            <View style={styles.padding30}>
              <View style={styles.imgViewStyle}>
                {this.props.errorType === 'NetWork' ? (
                  <Image
                    style={styles.noInternetImageStyle}
                    source={NO_INTERNET}
                  />
                ) : (
                  <Image source={INTERNALERROR} />
                )}
              </View>
              {this.props.errorType === 'NetWork' ? (
                <View>
                  <Text style={styles.errorHeader}>{Constants.NO_INTERNET}</Text>
                  <Text style={styles.errorSubText}>
                    {Constants.CHECK_INTERNET_CONNECTION}
                  </Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.errorHeader}>
                    We have an internal {'\n'} server error
                  </Text>
                  <Text style={styles.errorSubText}>
                    Please try again later
                  </Text>

                  <ButtonComponent
                    titleValue={'Retry'}
                    onPressHandler={this.props.reload}
                  />
                </View>
              )}
            </View>
          </Overlay>
        ) : null}
      </View>
    );
  }
}

export default LoginErrorOverlay;
