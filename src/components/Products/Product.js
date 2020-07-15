import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {getItemTransformedItemDesc} from './utils';
import styles from './styles';
import AddCart from '../AddCart/AddCart';
import * as Images from '../../assets/index';
import * as CommonConstants from '../../constants';
import ButtonComponent from '../Button/Button';

class Product extends React.Component {
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
              source={{uri: item.images[0].src}}
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

  renderProductImage = ({src}) => {
    return (
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={{uri: src}}
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
                {this.onAvatarImage(product)}
                <View>
                  <View style={styles.productViewContainerStyle}>
                    <View style={styles.productNameContainer}>
                      <Text style={styles.productName}>{product.name}</Text>
                    </View>
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
                          <Text style={styles.compareTextStyle}>Compare</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                  <Text style={styles.productDesc}>
                    {getItemTransformedItemDesc(product.short_description)}
                  </Text>

                  <View style={styles.priceViewContainerStyle}>
                    <View style={styles.pricingContainer}>
                      {product.regular_price !== '' &&
                        product.regular_price !== null &&
                        product.regular_price !== undefined && (
                          <Text style={styles.regularPrice}>
                            Rs.{product.regular_price}
                          </Text>
                        )}
                      <Text style={styles.salePrice}>
                        Rs.{product.sale_price}
                      </Text>
                    </View>
                    <View style={styles.addCartOuterViewContainerStyle}>
                      <View style={styles.imageViewContainerStyle}>
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
export default Product;
