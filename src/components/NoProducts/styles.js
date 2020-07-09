import {StyleSheet, Dimensions} from 'react-native';
import * as ThemeColor from '../../themes/colors';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    wholeViewContainerStyle: {
        backgroundColor: ThemeColor.DarkTextColor,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      emptyCartTextStyle: {
        marginLeft: windowWidth / 3,
        color: 'grey',
      },
});

export default styles;
