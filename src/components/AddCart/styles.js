import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  addTextStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    // borderBottomWidth: 1,
    borderColor: 'green',
    // borderRadius: 1,
    // borderWidth: 1,
    fontSize:10,
    color: "white"
  },
  addViewStyle: {
    width: "60%",
    height: 30,
    alignItems:'center',
    backgroundColor: "#e95f62",
    borderRadius: 5
  },
  minusViewStyle: {
    backgroundColor: '#ededed',
    borderColor: ThemeColor.DarkColor,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    height: 30,
    borderRightColor: ThemeColor.DarkTextColor,
    borderRightWidth: 0,
    
  },
  textViewStyle: {
    borderColor: ThemeColor.DarkColor,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    height: 30,
    borderLeftColor: ThemeColor.DarkTextColor,
    borderRightColor: ThemeColor.DarkTextColor,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRightWidth: 0
  },
  textTextStyle: {
    margin: 5,
    marginTop: 0,
    fontSize:10
  },
  plusViewStyle: {
    backgroundColor: '#e9fae8',
    borderColor: ThemeColor.DarkColor,
    borderLeftColor: ThemeColor.DarkTextColor,
    borderLeftWidth: 0,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    height: 30,
  },
});

export default styles;
