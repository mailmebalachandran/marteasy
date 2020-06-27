import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Animation from 'lottie-react-native';
import menuLoader from '../../assets/images/menu-loading.json';
import styles from './styles';

export default class MenuLoader extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 300,
              height: 300,
            }}
            loop={true}
            source={menuLoader}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('MenuLoader', () => MenuLoader);
