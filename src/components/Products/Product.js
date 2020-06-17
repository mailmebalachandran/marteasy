import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getItemTransformedItemDesc} from './utils';
import styles from "./styles"

class Product extends React.Component {
  constructor(props) {
    super(props);
    let productList = props.productList;
    let productListWithAdd = [];
    productList.map(item => {
      let element = [];
      element = item;
      element.count = 0;
      element.isAdd = true;
      productListWithAdd.push(element);
    });
    this.state = {
      productList: productListWithAdd,
      storeId: props.storeDetail.id,
      countList: [],
    };
  }
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
      <View style={styles.productScreenContainer}>
        {this.state.productList.map(product => (
          <View style={styles.productContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              {this.renderProductImage(product.images[0])}
              <View>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDesc}>
                  {getItemTransformedItemDesc(product.short_description)}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={styles.pricingContainer}>
                    <Text
                      style={styles.regularPrice}>
                      Rs.{product.regular_price}
                    </Text>
                    <Text
                      style={styles.salePrice}>
                      Rs.{product.sale_price}
                    </Text>
                  </View>
                  <View style={{marginTop: 10, width: '50%'}}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      {product.isAdd && (
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              this.props.onAddHandler(product)
                            }}>
                            <Text
                              style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingBottom: 5,
                                paddingTop: 5,
                                borderBottomWidth: 1,
                                borderColor: 'green',
                                borderRadius: 1,
                                borderWidth: 1,
                              }}>
                              Add
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                      {!product.isAdd && (
                        <>
                          <View>
                            <TouchableOpacity
                              onPress={() => this.props.handleQuantityChange(product, "DEC")}
                            >
                              <View>
                                <Icon
                                  name="minus"
                                  size={25}
                                  style={{marginTop: 5}}
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <Text style={{margin: 5}}>{product.count}</Text>
                          </View>
                          <View>
                            <TouchableOpacity
                              onPress={() => this.props.handleQuantityChange(product, "INC")}
                            >
                              <View>
                                <Icon
                                  name="plus"
                                  size={25}
                                  style={{marginTop: 5}}
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
export default Product;
