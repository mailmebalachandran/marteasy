import {StyleSheet, Platform} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  gravatarImageStyle: {
    resizeMode: 'contain',
    height: 100,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {height: 2},
    shadowOpacity: 0.3,
  },
  gravatarImageDefaultStyle: {
    resizeMode: 'contain',
    height: 100,
    width: '100%',
  },
  cardContainerStyle: {
    flex: 0.5,
    backgroundColor: ThemeColor.DarkTextColor,
  },
  gravatarViewStyle: {
    backgroundColor: 'transparent',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 25,
  },
  storeTextStyle: {
    textAlign: 'center',
    color: ThemeColor.DarkColor,
    fontWeight: '600',
  },
});

export default styles;
