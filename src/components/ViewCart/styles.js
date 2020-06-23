import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  ViewContainerStyle: {
    backgroundColor: ThemeColor.PrimaryColor,
    height: 50,
    justifyContent: 'center',
  },
  InnerContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  LeftItemContainerStyle: {
    marginRight: 20,
    justifyContent: 'center',
  },
  LeftTextColor: {
    color: ThemeColor.DarkTextColor,
  },
  CenterViewStyle: {
    width: '30%',
  },
  RightContainerStyle: {
    marginRight: 10,
    justifyContent: 'center',
  },
  ViewCartTextStyle: {
    color: ThemeColor.DarkTextColor,
  },
  ViewCartIconStyle: {
    marginRight: 30,
    justifyContent: 'center',
  },
});

export default styles;
