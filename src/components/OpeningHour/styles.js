import { StyleSheet } from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center'
  },
  avatarTitleStyle: {
    fontSize: 10,
    color: ThemeColor.DarkTextColor,
  },
  avatarContainerRedStyle: {
    backgroundColor: 'red',
    margin: 5,
  },
  avatarContainerGreenStyle: {
    backgroundColor: ThemeColor.DarkColor,
    margin: 5,
  }
});

export default styles;
