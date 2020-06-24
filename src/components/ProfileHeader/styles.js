import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: ThemeColor.BackgroundColorLight,
    shadowColor: '#4f4f4f',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    height: "4%",
    alignItems: "center",
    paddingLeft: ""
  },
  titleStyle: {
      alignSelf: "center",
  },
  navIcon: {
      fontWeight: '100',
      alignSelf: "center"
  }
});

export default styles;
