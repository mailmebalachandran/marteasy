import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getItemTransformedItemDesc } from './utils';
import styles from './styles';
import AddCart from '../AddCart/AddCart';
import * as Images from '../../assets/index';
import * as CommonConstants from '../../constants';
import ButtonComponent from '../Button/Button';
import { Divider } from 'react-native-elements';

class DrawerProduct extends React.Component {
  constructor(props) {
    super(props);
    let productList = props.productList;
    let productListWithAdd = [];

    productList.map(item => {
      let element = [];
      element = item;
      if (item.count === undefined || item.count === 0) {
        element.count = 0;
        element.isAdd = true;
      }
      productListWithAdd.push(element);
    });
    this.state = {
      productList: productListWithAdd,
      countList: [],
    };
  }

  onAvatarImage = item => {
    if (item.images.length > 0) {
      if (
        item.images[0].src.includes(
          CommonConstants.NODISHDEFAULT_TEXT_TO_SEARCH,
        )
      ) {
        return (
          <View style={styles.productImageContainer}>
            <Image
              style={styles.productImage}
              resizeMode="cover"
              source={Images.NODISH}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.productImageContainer}>
            <Image
              style={styles.productImage}
              resizeMode="cover"
              source={{ uri: item.images[0].src }}
            />
          </View>
        );
      }
    } else {
      return (
        <View style={styles.productImageContainer}>
          <Image
            style={styles.productImage}
            resizeMode="cover"
            source={Images.NODISH}
          />
        </View>
      );
    }
  };

  renderProductImage = ({ src }) => {
    return (
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={{ uri: src }}
        />
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.productScreenContainer}>
          {this.state.productList.map(product => (
            <View style={styles.productContainer} key={product.id.toString()}>
              <View style={styles.imageViewContainerStyle}>
                <View><View style={{ flex: 0.4 }}>{this.onAvatarImage(product)}</View></View>
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                  <View style={styles.productViewContainerStyle}>
                    {/* <View style={styles.productNameContainer}> */}
                    <Text style={styles.productName}>{product.name}</Text>
                    {/* </View> */}
                  </View>
                  {/* <Text style={styles.productDesc}>
                    {getItemTransformedItemDesc(product.short_description)}
                  </Text> */}
                  <View style={styles.priceViewContainerStyle}>
                    {/* <View style={styles.pricingContainer}> */}
                    <View style={{ flex: 1 }}>
                      <View style={{ flex: 1 }}>
                        {product.regular_price !== '' &&
                          product.regular_price !== null &&
                          product.regular_price !== undefined && (
                            <Text style={styles.regularPrice}>
                              MRP:
                              <Text style={{ marginLeft: 5, textDecorationLine: "line-through" }}> Rs.{product.regular_price}</Text>
                            </Text>
                          )}
                      </View>
                      <View style={{ flex: 1 }}><Text style={styles.salePrice}>
                        Rs.
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{product.sale_price}</Text>
                      </Text>
                      </View>
                    </View>

                    {/* </View> */}
                    <View style={{ flex: 1,justifyContent: "flex-end", alignItems: "flex-end" }}>
                      {/* <View style={styles.addCartOuterViewContainerStyle}> */}
                      <View style={styles.buttonContainer}>
                        {this.props.isCompareProduct === true &&
                          product.tags.length > 0 ? (
                            <View style={styles.compareViewStyle}>
                              <TouchableOpacity
                                onPress={() => {
                                  this.props.navigation.navigate('CompareProducts', {
                                    tagId: product.tags[0].id,
                                    productId: product.id,
                                  });
                                }}>
                                <Text style={styles.compareTextStyle}>COMPARE</Text>
                              </TouchableOpacity>
                            </View>
                          ) : null}
                      </View>
                      <View style={styles.buttonContainer}>
                        <AddCart
                          productValue={product}
                          onAddHandler={product => {
                            this.props.onAddHandler(product);
                          }}
                          handleQuantityChange={(product, type) => {
                            this.props.handleQuantityChange(product, type);
                          }}
                        />
                      </View>
                      {/* </View> */}
                    </View>

                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
export default DrawerProduct;
