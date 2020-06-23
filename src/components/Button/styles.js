import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  buttonStyle: {borderColor: ThemeColor.DarkColor, borderWidth: 1, borderStyle: 'solid'},
  buttonContainerStyle: {margin: 10},
  titleStyle: {color: ThemeColor.DarkColor}
});

export default styles;
