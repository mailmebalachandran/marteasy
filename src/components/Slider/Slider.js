import React, {Component, createRef} from 'react';
import {Text, View, FlatList, Image, Dimensions} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './styles';
import * as ThemeColor from '../../themes/colors';

import Carousel from 'react-native-snap-carousel';

export default class Slider extends Component {
  
  render() {

    return (
      <View style={styles.containerStyle}>
         <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.props.dataValues}
              renderItem={({item}) => (
                <Card containerStyle={{padding:0}}>
                    <Image
                      source={item.name} style={{height:200,width:'100%'}}
                    />
                </Card>
              )}
              sliderWidth={400}
              itemWidth={200}
            />
      </View>
    );
  }
}
