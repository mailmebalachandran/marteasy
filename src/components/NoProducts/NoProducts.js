import React, {Component} from 'react';
import {View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,} from 'react-native';
import ButtonComponent from '../../components/Button/Button';
import * as Images from '../../assets/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ThemeColor from '../../themes/colors';
import styles from './styles';

class NoProducts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.wholeViewContainerStyle}>
        <Image
          source={Images.EMPTYCART}
          style={styles.emptyCartViewStyle}
        />
        <Text style={styles.emptyCartTextStyle}>2
          Your cart is empty
        </Text>
        <ButtonComponent
          titleValue="Browse Stores"
          onPressHandler={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default NoProducts;
