import React from 'react';
import {View, Text, Image, ScrollView, Picker} from 'react-native';
import {getItemTransformedItemDesc} from '../../screens/MotorProductScreen/utils';
import styles from '../../screens/MotorProductScreen/styles';
import AddCart from '../../components/AddCart/AddCart';
import * as Images from '../../assets/index';
import * as CommonConstants from '../../constants';

class MotorProductList extends React.Component {
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
          {this.state.productList.map(product => {
            product.sale_price = this.props.price;
            return (
            <View style={styles.productContainer} key={product.id.toString()}>
              <View style={styles.imageViewContainerStyle}>
                {this.onAvatarImage(product)}
                <View>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productDesc}>
                    {getItemTransformedItemDesc(product.short_description)}
                  </Text>
                  <View style={styles.priceViewContainerStyle}>
                    <View style={styles.pricingContainer}>
                      <Text style={styles.salePrice}>
                        Rs.{this.props.price}
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
                  <View style={styles.pricingContainer}>
                      <Text style={styles.salePrice}>
                        Type: {this.props.productType}
                      </Text>
                    </View>
                </View>
              </View>
            </View>
          )})}
        </View>
      </ScrollView>
    );
  }
}
export default MotorProductList;
