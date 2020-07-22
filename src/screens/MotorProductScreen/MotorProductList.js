import React from 'react';
import { View, Text, Image, ScrollView, Picker } from 'react-native';
import { getItemTransformedItemDesc } from '../../screens/MotorProductScreen/utils';
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
    const productList = this.state.productList;
    return (
      <View style={{ flex: 1 }}>
        {productList.map(product =>
          <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row',backgroundColor:"#ccc" }}>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                <View>{this.onAvatarImage(product)}</View>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 25, textTransform: "capitalize", marginLeft: "15%" }}>{product.name}</Text>
              </View>
            </View>
            {/* <View style={{ flex: 0.35, flexDirection: "row" }}>
              <View style={{ flex: 1, justifyContent: "center", alignItems:"center" }}>
                <Text style={{fontSize:15, color: "green"}}>Type: {this.props.productType}</Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems:"center" }}>
                <Text style={{fontSize:30, color: "green"}}>Rs.{product.price}</Text>
              </View>
            </View> */}
          </View>)}

      </View>
    )


  }
}

export default MotorProductList;
