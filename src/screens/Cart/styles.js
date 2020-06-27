import {StyleSheet, Dimensions} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#087f23',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  wholeViewContainerStyle: {
    backgroundColor: ThemeColor.DarkTextColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emptyCartViewStyle: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
    backgroundColor: 'transparent',
    marginLeft: windowWidth / 4,
  },
  emptyCartTextStyle: {
    marginLeft: windowWidth / 3,
    color: 'grey',
  },
  cartContainerStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
  },
});

export default styles;
