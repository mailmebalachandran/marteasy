import React, { Component } from 'react';
import { View, Image, FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements';
import * as ThemeColor from '../../themes/colors';

class StoreList extends Component {
  constructor(props) {
    super(props);
  }

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
                  this.props.navigation.navigate('Search', {
                    storeId: item.id,
                    storeName: item.store_name,
                    storeOpen: item.store_open_close
                  })
                }
                }
              >
                <View>
                  <Image
                    source={{ uri: item.gravatar }}
                    style={{
                      resizeMode: 'contain',
                      height: 100,
                      width: '100%',
                    }}
                  />
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
          numColumns={2}
        />
      </View>
    );
  }
}

export default StoreList;
