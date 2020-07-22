import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements';
import * as ThemeColor from '../../themes/colors';
import * as Images from '../../assets/index';
import * as CommonConstants from '../../constants';
import * as catImages from "../../assets/index";
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import unescape from "unescape";
import SubcategoryAPI from '../../api/Home/SubcategoryAPI';
import {IMAGE_LOADER} from "../../assets/index";

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          category_name: "Fruits & Vegetables",
          gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_1487_v_3_500_1580063978.jpg"
        },
        {
          category_name: "Groceries",
          gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_1616_v_3_500_1592303534.jpg"
        }
      ],
      data2: [
        {
          category_name: "Restaurants",
          gravatar: catImages.CAT_RESTAURANTS
        },
        {
          category_name: "Egg, Meat & Fish",
          gravatar: catImages.CAT_MEAT
        },
        {
          category_name: "Electronics",
          gravatar: catImages.CAT_ELECTRONICS
        },
        {
          category_name: "Pets Zone",
          gravatar: catImages.CAT_PETS
        },
        {
          category_name: "Pharmacy",
          gravatar: catImages.CAT_PHARMA
        },
        {
          category_name: "Motor Wash",
          gravatar: catImages.CAT_MOTOR
        },
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

  getStoreImages = async (storeId) => {
    const result = await SubcategoryAPI.getSingleStore(storeId);
    return result.gravatar;
  }

  render() {
    return (
      <View style={styles.otherCategoryContainer}>
        {/* Main Category 2 column */}
        {this.props.categories.map(cat => {
          return (
            <View style={styles.categoryItemContainer} key={cat.id}>
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate((!this.props.isShowStore ? 'SubCategoryProducts' : 'CategoryProductScreen'), {
                    storeId: cat.id,
                    storeName: cat.name
                  })
                }
                }
              >
                <View
                  style={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 25,
                  }}>
                  <Image
                    source={this.props.isShowStore ? this.getStoreImages(cat.id) :
                      { uri: cat.image.src }}
                    defaultSource={IMAGE_LOADER}
                    style={{
                      resizeMode: 'contain',
                      height: 100,
                      width: '100%',
                    }}
                  />
                </View>
                <Text
                  style={styles.categoryName}>
                  {unescape(cat.name)}
                </Text>
              </TouchableNativeFeedback>
            </View>
          )
        })}
      </View>
    )
  }
}


export default CategoryList;
