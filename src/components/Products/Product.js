import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getItemTransformedItemDesc} from './utils';
import ButtonComponent from '../../components/Button/Button';

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
      <View style={{height: 100}}>
        <Image
          style={{height: 100, width: 100, borderRadius: 20}}
          resizeMode="cover"
          source={{uri: src}}
        />
      </View>
    );
  };

  onAddHandler = item => {
    let list = [];
    this.state.productList.map((product) => {
      list = product;
      if (product.id === item.id) {
        product.isAdd = false;
      }
    });
    this.setState({productList: list});
  };

  render() {
    return (
      <View style={{height: '100%'}}>
        {this.state.productList.map(product => (
          <View
            style={{
              height: 125,
              margin: 10,
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 1,
              borderWidth: 1,
              borderColor: 'white',
              borderStyle: 'solid',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              {this.renderProductImage(product.images[0])}
              <View>
                <Text style={{marginLeft: 10}}>{product.name}</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 10,
                    flexWrap: 'wrap',
                    width: '100%',
                  }}>
                  {getItemTransformedItemDesc(product.short_description)}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '50%'}}>
                    <Text
                      style={{
                        marginLeft: 10,
                        textDecorationLine: 'line-through',
                        fontSize: 12,
                        color: 'red',
                      }}>
                      Rs.{product.regular_price}
                    </Text>
                    <Text
                      style={{marginLeft: 10, color: 'green', fontSize: 15}}>
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
                              this.onAddHandler(product)
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
                            <TouchableOpacity>
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
                            <TouchableOpacity>
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
