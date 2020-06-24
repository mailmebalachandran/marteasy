import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getItemTransformedItemDesc } from './utils';
import styles from './styles';
import AddCart from '../AddCart/AddCart';

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
      storeId: props.storeDetail.id,
      countList: [],
    };
  }

  onAvatarImage = item => {
    if (item.images.length > 0) {
      return (
        <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={{uri: item.images[0].src}}
        />
      </View>
      );
    } else {
      return (
        <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={Images.NOSTORE}
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
            <View style={styles.productContainer}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                {this.onAvatarImage(product)}
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
                      { product.regular_price !== '' && product.regular_price !== null && product.regular_price !== undefined && 
                        <Text style={styles.regularPrice}>
                          Rs.{product.regular_price}
                        </Text>
                      }
                      <Text style={styles.salePrice}>
                        Rs.{product.sale_price}
                      </Text>
                    </View>
                    <View style={{ marginTop: 10, width: '50%' }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                        }}>
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
