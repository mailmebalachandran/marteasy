import React, {Component} from 'react';
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-elements';
import * as Images from '../../assets/index';
import * as CommonConstants from '../../constants';

class StoreList extends Component {
  constructor(props) {
    super(props);
  }

  onAvatarImage = item => {
    if (item.gravatar !== undefined) {
      if (
        item.gravatar.includes(CommonConstants.NOSTOREDEFAULT_TEXT_TO_SEARCH)
      ) {
        return (
          <Image source={Images.NOSTORE} style={styles.gravatarImageStyle} />
        );
      } else {
        return (
          <Image
            source={{uri: item.gravatar}}
            style={styles.gravatarImageDefaultStyle}
          />
        );
      }
    } else {
      return (
        <Image source={Images.NOSTORE} style={styles.gravatarImageStyle} />
      );
    }
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          style={{flex: 1}}
          data={this.props.dataValues}
          horizontal={true}
          renderItem={({item}) => (
            <Card containerStyle={styles.cardContainerStyle}>
              <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('ProductScreen', {
                    storeId: item.id,
                    storeName: item.store_name,
                    storeOpen: item.store_open_close,
                  });
                }}>
                <View style={styles.gravatarViewStyle}>
                  {this.onAvatarImage(item)}
                </View>
                <Text style={styles.storeTextStyle}> {this.Capitalize(item.store_name)} </Text>
              </TouchableOpacity>
            </Card>
          )}
          keyExtractor={(item, index) => {
            return item.id.toString();
          }}
        />
      </View>
    );
  }
}

export default StoreList;
