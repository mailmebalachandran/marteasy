import React, { Component } from 'react';
import { View, Image, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements';
import * as ThemeColor from '../../themes/colors';
import * as Images from '../../assets/index';

class StoreList extends Component {
  constructor(props) {
    super(props);
  }

  onAvatarImage = item => {
    if (item.gravatar !== undefined) {
      return (
        <Image
        source={{ uri: item.gravatar }}
        style={{
          resizeMode: 'contain',
          height: 100,
          width: '100%',
        }}
      />
      );
    } else {
      return (
        <Image
        source={Images.NOSTORE}
        style={{
          resizeMode: 'contain',
          height: 100,
          width: '100%',
        }}
      />
      );
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          style={{ flex: 1 }}
          columnWrapperStyle={styles.row}
          data={this.props.dataValues}
          renderItem={({ item }) => (
            <Card containerStyle={{ flex: 0.5 }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ProductScreen', {
                    storeId: item.id,
                    storeName: item.store_name,
                    storeOpen: item.store_open_close
                  })
                }
                }
              >
                <View>
                  {this.onAvatarImage(item)}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: ThemeColor.DarkColor,
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  {item.store_name}{' '}
                </Text>
              </TouchableOpacity>
            </Card>
          )}
          keyExtractor={(item) => {item.id}}
          numColumns={2}
        />
      </View>
    );
  }
}

export default StoreList;
