import {StyleSheet} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: ThemeColor.BackgroundColorLight,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
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
});

export default styles;
