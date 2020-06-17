import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';
import { screenHeight, screenWidth } from "../../utils"
import menuLoader from '../../assets/images/menu-loading.json';

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
              width: screenWidth-60,
              height: screenHeight-100,
            }}
            loop={true}
            source={menuLoader}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
});

AppRegistry.registerComponent('MenuLoader', () => MenuLoader);