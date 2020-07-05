import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import * as ThemeColors from "../../themes/colors";

export default class Slider extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <SliderBox
          images={this.props.images}
          onCurrentImagePressed={index => {}}
          currentImageEmitter={index => {}}
          autoplay={this.props.autoplay}
          circleLoop={this.props.isLoop}
          dotColor={ThemeColors.DarkColor}
          imageLoadingColor={ThemeColors.DarkColor}
        />
      </View>
    );
  }
}
