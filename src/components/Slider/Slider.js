import React, {Component} from 'react';
import {Text, View, FlatList, Image, Dimensions} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import styles from './styles';
import * as ThemeColor from '../../themes/colors';

import Carousel from 'react-native-snap-carousel';

export default class Slider extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.props.dataValues}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.flatListViewStyle}>
              <Image source={item.name} style={styles.flatListImageStyle} />
            </View>
          )}
          keyExtractor={item => {item.id}}
        />
      </View>
    );
  }
}
