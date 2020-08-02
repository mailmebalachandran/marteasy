import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import * as ThemeColor from '../../themes/colors';
import * as CommonConstants from '../../constants';
import * as Images from '../../assets/index';

class MustHave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "1",
          category_name: "Tea, Coffee etc.",
          gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_12_v_3_500_1580062743.jpg"
        },
        {
          id: "2",
          category_name: "Dairy Products",
          gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_14_v_3_500_1580063018.jpg"
        },
        {
          id: "3",
          category_name: "Home Needs",
          gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_1379_v_3_500_1580064374.jpg"
        },
        {
          id: "4",
          category_name: "Baby Care",
          gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_7_v_3_500_1580062720.jpg"
        }
      ]
    }
  }

  onAvatarImage = item => {
    if (item.gravatar !== undefined) {
      if (item.gravatar.includes(CommonConstants.NOSTOREDEFAULT_TEXT_TO_SEARCH)) {
        return (
          <Image
            source={Images.NOSTORE}
            style={{
              resizeMode: 'contain',
              height: 100,
              width: '100%',
              shadowColor: 'black',
              shadowOffset: { height: 2 },
              shadowOpacity: 0.3,
            }}
          />
        );
      } else {
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
      }
    } else {
      return (
        <Image
          source={Images.NOSTORE}
          style={{
            resizeMode: 'contain',
            height: 100,
            width: '80%',
            shadowColor: 'black',
            shadowOffset: { height: 2 },
            shadowOpacity: 0.3,
          }}
        />
      );
    }
  };

  render() {
    return (
      <View style={styles.mainCategoryContainer}>
        {/* Main Category 2 column */}
        {this.state.data.map(cat => {
          return (
            <View style={styles.categoryItemContainer2Col}>
              <TouchableOpacity
                onPress={() => { }}>
                <View
                  key={cat.id}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'transparent',
                    width: '100%',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 25,
                  }}>
                  <View style={{
                    backgroundColor: "rgba(175,175,175,0.1)",
                    borderColor: "#99d066", borderWidth: 0.4,
                    borderRadius: 5,
                    width: "80%"
                  }}>
                    <Image
                      source={{ uri: cat.gravatar }}
                      style={{
                        resizeMode: 'contain',
                        height: 100,
                        width: '100%',
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={styles.categoryName}>
                  {' '}
                  {cat.category_name}{' '}
                </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

export default MustHave;
