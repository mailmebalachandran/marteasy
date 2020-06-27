import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  AsyncStorage,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Avatar, Divider, Overlay} from 'react-native-elements';
import * as Images from '../../assets/index';
import ButtonComponent from '../../components/Button/Button';
import * as ThemeColor from '../../themes/colors';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartAPI from '../../api/Cart/CartAPI';
import AddCart from '../../components/AddCart/AddCart';
import MenuLoader from '../../components/Loader/MenuLoader';
import * as CommonConstants from '../../constants';
import NetInfo from '@react-native-community/netinfo';
import ErrorOverlay from '../../components/Errors/ErrorOverlay';
import styles from '../../components/Button/styles';

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isCartEmpty: false,
      productList: [],
      totalAmount: 0,
      deliveryAmount: CommonConstants.DELIVERY_FEE,
      totalCount: 0,
      totalAllAmount: 0,
      overlayVisible: false,
      isShowError: false,
      IsInternetConnected: true,
    };
    this.getCartDetails();
  }

  getDataToStorage = async () => {
    try {
      let value = await AsyncStorage.getItem('Cart');
      return JSON.stringify(value);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    this.initialPageLoad();
  };

  initialPageLoad = () => {
    this.setState({isShowError: false});
    NetInfo.addEventListener(this.handleConnectivityChange);
    NetInfo.fetch().done(isConnected => {
      if (isConnected.isConnected == true) {
        this.setState({IsInternetConnected: true});
      } else {
        this.setState({IsInternetConnected: false});
      }
    });
    this.setState({isLoading: true});
    this.getCartDetails();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true});
      this.getCartDetails();
    });
  };

  handleConnectivityChange = isConnected => {
    if (isConnected.isConnected == true) {
      this.setState({IsInternetConnected: true});
    } else {
      this.setState({IsInternetConnected: false});
    }
  };

  getCartDetails = async () => {
    let asyncDetails = await AsyncStorage.getItem('Cart');
    let productsInCart = '';
    if (asyncDetails != null) {
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      });

      let otherStoreProduct = result.filter(function(item) {
        return item.storeId !== '';
      });
      for (var item in otherStoreProduct) {
        if (otherStoreProduct[item] !== null) {
          for (var product in otherStoreProduct[item].products) {
            if (otherStoreProduct[item].products[product] !== null) {
              productsInCart +=
                otherStoreProduct[item].products[product].productId + ',';
            }
          }
        }
      }
      if (productsInCart !== '') {
        let productListData = await CartAPI.GetCartDetails(productsInCart);
        if (
          productListData !== undefined &&
          productListData.isError !== undefined &&
          productListData.isError === true
        ) {
          this.setState({isShowError: true, isLoading: false});
        }
        if (
          productListData !== null &&
          productListData !== undefined &&
          productListData.length > 0
        ) {
          let productWithCount = [];
          productListData.map(items => {
            let obj = {};
            obj = items;
            for (var item in otherStoreProduct) {
              if (otherStoreProduct[item] !== null) {
                for (var product in otherStoreProduct[item].products) {
                  if (
                    otherStoreProduct[item].products[product] !== null &&
                    otherStoreProduct[item].products[product].productId ===
                      items.id
                  ) {
                    obj.count = otherStoreProduct[item].products[product].count;
                    productWithCount.push(obj);
                  }
                }
              }
            }
          });
          this.setState(
            {productList: productWithCount, isCartEmpty: false},
            () => {
              this.totalAmountCountHandler();
              this.setState({isLoading: false});
            },
          );
        } else {
          this.setState({isCartEmpty: true, isLoading: false, productList: []});
        }
      } else {
        this.setState({isCartEmpty: true, isLoading: false, productList: []});
      }
    } else {
      this.setState({isCartEmpty: true, isLoading: false, productList: []});
    }
  };

  onSubmitHandler = async () => {
    let userDetails = await AsyncStorage.getItem('userAuth');
    if (userDetails !== null) {
      let userDetailsTemp = JSON.parse(userDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return userDetailsTemp[k];
      });
      this.setState({overlayVisible: false});
    } else {
      this.setState({overlayVisible: true});
    }
  };

  onAvatarImage = item => {
    if (item.images.length > 0) {
      return (
        <View style={{width: '20%'}}>
          <Avatar size="large" source={{uri: item.images[0].src}} />
        </View>
      );
    } else {
      return (
        <View style={{width: '20%'}}>
          <Avatar size="large" source={Images.NODISH} />
        </View>
      );
    }
  };

  onAddHandler = item => {
    let list = [];
    this.state.productList.map(product => {
      if (product.id === item.id) {
        product.isAdd = false;
        product.count++;
      }
      list.push(product);
    });
    this.setState({productList: list}, () => {
      this.totalAmountCountHandler();
    });
    this.checkCountDetails(item.store.id, item.id, item.count, item.sale_price);
  };

  handleQuantityChange = async (item, type) => {
    let list = [];
    this.state.productList.map(product => {
      if (product.id === item.id) {
        if (item.count > 0) {
          type === 'INC' ? product.count++ : product.count--;
        }
        if (product.count === 0) {
          product.isAdd = true;
        }
      }
      list.push(product);
    });
    this.setState({productList: list}, () => {
      this.totalAmountCountHandler();
    });
    this.checkCountDetails(item.store.id, item.id, item.count, item.sale_price);
    if (type !== 'INC' && item.count === 0) {
      let asyncDetails = await AsyncStorage.getItem('Cart');
      if (asyncDetails != null) {
        let asyncDetailsTemp = JSON.parse(asyncDetails);
        let result = Object.keys(asyncDetailsTemp).map(function(k) {
          return asyncDetailsTemp[k];
        });
        for (var asyncItem in result) {
          for (var asyncProduct in result[asyncItem].products)
            if (
              result[asyncItem].products[asyncProduct] !== null &&
              result[asyncItem].products[asyncProduct].productId === item.id
            ) {
              delete result[asyncItem].products[asyncProduct];
            }
        }
        this.storeDataToStorage(result);
        this.getCartDetails();
      }
    }
  };

  checkCountDetails = async (storeId, productId, count, amount) => {
    let countDetail = [];

    this.state.countDetail = [];
    let asyncDetails = await AsyncStorage.getItem('Cart');
    if (asyncDetails != null) {
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      });
      this.setState({countDetail: result.slice()});
    }

    if (this.state.countDetail.length > 0) {
      let storeCount = this.state.countDetail;
      let isStoreAvailable = false;
      for (var item in storeCount) {
        if (
          storeCount[item].storeId === storeId &&
          storeCount[item].products.length > 0
        ) {
          let isProductAvailable = false;
          for (var product in storeCount[item].products) {
            if (
              storeCount[item].products[product] !== null &&
              storeCount[item].products[product].productId === productId
            ) {
              storeCount[item].products[product].count = count;
              storeCount[item].products[product].amount = amount;
              isProductAvailable = true;
              isStoreAvailable = true;
            }
          }
          if (!isProductAvailable) {
            let obj = {};
            obj.productId = productId;
            obj.count = count;
            obj.amount = amount;
            if (storeCount[item].products[product] === null) {
              storeCount[item].products = [];
            }
            storeCount[item].products.push(obj);
            isStoreAvailable = true;
          }
        }
      }
      if (!isStoreAvailable) {
        let storeObj = {};
        let productObj = {};
        storeObj.products = [];
        productObj.productId = productId;
        productObj.count = count;
        productObj.amount = amount;
        storeObj.storeId = storeId;
        storeObj.products.push(productObj);
        storeCount.push(storeObj);
      }
      this.setState({countDetail: storeCount});
      if (storeCount.length > 0) {
        let amount = 0;
        let count = 0;
        for (var item in storeCount) {
          for (var product in storeCount[item].products) {
            if (
              storeCount[item].products[product] !== null &&
              storeCount[item].products[product].count !== 0
            ) {
              amount +=
                parseInt(storeCount[item].products[product].amount) *
                storeCount[item].products[product].count;
              count += storeCount[item].products[product].count;
            } else {
              delete storeCount[item].products[product];
            }
          }
        }
        if (count !== 0) {
          this.setState({isViewCart: true});
        } else {
          this.setState({isViewCart: false});
        }
        this.setState({productCount: count, productAmount: amount}, () => {
          this.storeDataToStorage(storeCount);
        });
      }
    } else {
      var storeObj = {};
      storeObj.storeId = storeId;
      storeObj.products = [];
      var productDetail = {};
      productDetail.productId = productId;
      productDetail.count = count;
      productDetail.amount = amount;
      storeObj.products.push(productDetail);
      countDetail.push(storeObj);
      this.setState({countDetail: countDetail});
      if (countDetail.length > 0) {
        let amount = 0;
        let count = 0;
        for (var item in countDetail) {
          for (var product in countDetail[item].products) {
            if (countDetail[item].products[product].count !== 0) {
              amount +=
                parseInt(countDetail[item].products[product].amount) *
                countDetail[item].products[product].count;
              count += countDetail[item].products[product].count;
            } else {
              delete countDetail[item].products[product];
            }
          }
        }
        if (count !== 0) {
          this.setState({isViewCart: true});
        } else {
          this.setState({isViewCart: false});
        }
        this.setState({productCount: count, productAmount: amount}, () => {
          this.storeDataToStorage(countDetail);
        });
      }
    }
  };

  storeDataToStorage = async storeCount => {
    try {
      await AsyncStorage.setItem('Cart', JSON.stringify(storeCount));
    } catch (err) {
      console.log('Error Details ' + err);
    }
  };

  removeDataToStorage = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  getTotalCount = item => {
    this.setState({totalCount: item});
  };

  onRemoveHandler = async item => {
    let asyncDetails = await AsyncStorage.getItem('Cart');
    if (asyncDetails != null) {
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      });
      for (var asyncItem in result) {
        for (var asyncProduct in result[asyncItem].products)
          if (
            result[asyncItem].products[asyncProduct] !== null &&
            result[asyncItem].products[asyncProduct].productId === item.id
          ) {
            delete result[asyncItem].products[asyncProduct];
          }
      }
      this.storeDataToStorage(result);
      this.getCartDetails();
    }
  };

  totalAmountCountHandler = () => {
    let totalCount = 0;
    let totalAmount = 0;
    this.state.productList.map(item => {
      totalCount += item.count;
      totalAmount += item.count * item.sale_price;
    });
    let totalAllAmount = totalAmount + this.state.deliveryAmount;
    this.setState({
      totalCount: totalCount,
      totalAmount: totalAmount,
      totalAllAmount: totalAllAmount,
    });
  };

  render() {
    return (
      <>
        {!this.state.IsInternetConnected ? (
          <ErrorOverlay errorType={'NetWork'} />
        ) : this.state.isLoading ? (
          <MenuLoader />
        ) : this.state.isShowError ? (
          <ErrorOverlay errorType={'API'} reload={this.componentDidMount} />
        ) : (
          <>
            {this.state.isCartEmpty && (
              <>
                {this.state.isLoading ? (
                  <MenuLoader />
                ) : (
                  <View
                    style={styles.wholeViewContainerStyle}>
                    <StatusBarComponent />
                    <Image
                      source={Images.EMPTYCART}
                      style={styles.emptyCartViewStyle}
                    />
                    <Text style={styles.emptyCartTextStyle}>
                      Your cart is empty
                    </Text>
                    <ButtonComponent
                      titleValue="Browse Stores"
                      onPressHandler={() => {
                        this.props.navigation.navigate('Home');
                      }}
                    />
                  </View>
                )}
              </>
            )}
            {!this.state.isCartEmpty && (
              <>
                {this.state.isLoading ? (
                  <MenuLoader />
                ) : (
                  <View style={styles.cartContainerStyle}>
                    <StatusBarComponent />
                    <ScrollView>
                      <View>
                        {this.state.productList.map(item => (
                          <View
                            style={{
                              height: 150,
                              padding: 10,
                              marginBottom: 20,
                              backgroundColor: ThemeColor.DarkTextColor,
                              shadowColor: '#000',
                              shadowOffset: {
                                width: 0,
                                height: 2,
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84,
                              elevation: 5,
                            }}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                              <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={{fontSize: 16}}>{item.name}</Text>
                                <Text style={{fontSize: 12, color: 'grey'}}>
                                  {item.store.shop_name}
                                </Text>
                                <Text style={{fontSize: 20}}>
                                  <Text style={{fontSize: 12}}>
                                    {' '}
                                    {item.count} * {item.sale_price} {'      '}
                                  </Text>
                                  Rs. {item.count * item.sale_price}
                                </Text>
                              </View>
                              <View>{this.onAvatarImage(item)}</View>
                            </View>
                            <Divider />
                            <View
                              style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                }}>
                                <View>
                                  <View
                                    style={{
                                      flex: 1,
                                      flexDirection: 'row',
                                      justifyContent: 'center',
                                      height: 45,
                                      marginTop: 10,
                                    }}>
                                    <AddCart
                                      productValue={item}
                                      onAddHandler={item => {
                                        this.onAddHandler(item);
                                      }}
                                      handleQuantityChange={(item, type) => {
                                        this.handleQuantityChange(item, type);
                                      }}
                                    />
                                  </View>
                                </View>

                                <TouchableOpacity
                                  onPress={() => {
                                    this.onRemoveHandler(item);
                                  }}>
                                  <View
                                    style={{
                                      height: 45,
                                      justifyContent: 'center',
                                    }}>
                                    <Text>
                                      Remove{'   '}
                                      <Icon name="trash" size={20} />
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        ))}
                      </View>
                      <View
                        style={{
                          backgroundColor: ThemeColor.DarkTextColor,
                          paddingTop: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          flex: 1,
                        }}>
                        <View style={{height: 40}}>
                          <Text>PRICE DETAILS</Text>
                        </View>
                        <Divider />
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{margin: 10}}>
                              Price ( {this.state.totalCount} Item
                              {this.state.totalCount > 1 ? 's' : ''} )
                            </Text>
                            <Text style={{margin: 10}}>Delivery Fee</Text>
                          </View>
                          <View>
                            <Text style={{margin: 10}}>
                              Rs. {this.state.totalAmount}
                            </Text>
                            <Text style={{margin: 10}}>
                              Rs. {this.state.deliveryAmount}
                            </Text>
                          </View>
                        </View>
                        <Divider />
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{margin: 10, fontWeight: 'bold'}}>
                              Total
                            </Text>
                          </View>
                          <View>
                            <Text style={{margin: 10, fontWeight: 'bold'}}>
                              Rs. {this.state.totalAllAmount}
                            </Text>
                          </View>
                        </View>
                        <Divider style={{marginBottom: 15}} />
                      </View>
                    </ScrollView>
                    <View>
                      <ButtonComponent
                        titleValue="Proceed to Pay"
                        onPressHandler={() => this.onSubmitHandler()}
                      />
                    </View>
                    <Overlay
                      isVisible={this.state.overlayVisible}
                      onBackdropPress={() => {
                        this.setState({overlayVisible: false});
                      }}>
                      <View
                        style={{
                          height: 400,
                          width: 250,
                          justifyContent: 'center',
                        }}>
                        <Text style={{marginLeft: 40, color: 'grey'}}>
                          User not logged in.
                        </Text>
                        <ButtonComponent
                          titleValue="Login"
                          onPressHandler={() => {
                            this.setState({overlayVisible: false});
                            this.props.navigation.navigate('LoginScreen');
                          }}
                        />
                      </View>
                    </Overlay>
                  </View>
                )}
              </>
            )}
          </>
        )}
      </>
    );
  }
}

export default CartScreen;
