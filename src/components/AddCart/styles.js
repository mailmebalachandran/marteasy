import { StyleSheet } from 'react-native';
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
    fontSize: 11,
    color: "white"
  },
  addBtnIcon: {
    color: ThemeColor.ADD_BTN_COLOR
  },
  //Not Being used for now
  addViewStyle: {
    height: 30,
    alignItems: 'center',
    backgroundColor: ThemeColor.ADD_BTN_COLOR,
    borderRadius: 5
  },
  minusPlusViewStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: ThemeColor.ADD_BTN_COLOR,
    borderRadius: 5,
    padding: 8,
    height: 30,
  },
  textViewStyle: {
    height: 30,
  },
  textTextStyle: {
    margin: 5,
    marginTop: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: ThemeColor.ADD_BTN_COLOR,
  },
});

export default styles;
