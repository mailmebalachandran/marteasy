import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: ThemeColor.PrimaryColor,
  },
  drawerStyle: {
    flex: 0.3,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  addToCartContainerStyle: {
    flex: 0.2,
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
});

export default styles;
