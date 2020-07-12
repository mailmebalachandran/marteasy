import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: ThemeColor.PrimaryColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
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
  titleStyle: {flex: 0.5, justifyContent: 'center'},
  badgeContainerStyle: {
    position: 'absolute',
    top: -5,
    right: 25,
  },
  badgeBadgeStyle: {
    backgroundColor: 'red',
  },
  centerViewStyle: {
    flex: 0.2,
  },
  rightViewStyle: {
    justifyContent: 'center',
  },
  text:{
    color: ThemeColor.PrimaryTextColor}
});

export default styles;
