import React, {Component} from 'react';
import {Text, Image, Avatar, Rating} from 'react-native-elements';
import {
  SafeAreaView,
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Line from '../../components/Line/Line';
import ProductAPI from '../../api/Products/ProductAPI';
import OpeningHour from '../../components/OpeningHour/OpeningHour';
import Product from '../../components/Products/Product';
import * as ThemeColor from '../../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuLoader from '../../components/Loader/MenuLoader';
import Header from '../../components/Header/Header';
import ViewCart from '../../components/ViewCart/ViewCart';

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      productList: [],
      infoMessage: '',
      storeDetail: {},
      countDetail: [],
      isViewCart: false,
      productCount: 0,
      productAmount: 0,
      storeId: 0,
      isRunning: false,
    };
  }

  componentDidMount = async () => {
    this.onPageLoad();
  };

  onPageLoad = async () => {
    this.setState({isLoading: true, storeId: this.props.route.params.storeId});
    const storedId = this.props.route.params.storeId;
    const storeDetail = await ProductAPI.GetStoreBasedonStoreId(
      this.props.route.params.storeId,
    );
    const productList = await ProductAPI.GetProductBasedonStoreId(
      this.props.route.params.storeId,
    );

    let list = [];
    this.state.list = [];
    let asyncDetails = await AsyncStorage.getItem('Cart');
    if (asyncDetails != null) {
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      });
      let currentStoreProduct = result.filter(function(item) {
        return item.storeId == storedId;
      });

      let countForPageLoad = [];
      if (currentStoreProduct != null && currentStoreProduct.length > 0) {
        productList.map(product => {
          for (var item in currentStoreProduct[0].products) {
            let obj = {};
            if (currentStoreProduct[0].products[item] !== null) {
              if (
                currentStoreProduct[0].products[item].productId == product.id
              ) {
                product.isAdd = false;
                product.count = currentStoreProduct[0].products[item].count;
                product.amount = currentStoreProduct[0].products[item].amount;
                obj.isAdd = false;
                obj.count = currentStoreProduct[0].products[item].count;
                obj.amount = currentStoreProduct[0].products[item].amount;
                countForPageLoad.push(obj);
              }
            }
          }
          list.push(product);
        });
      }
      let otherStoreProduct = result.filter(function(item) {
        return item.storeId !== storedId;
      });

      for (var item in otherStoreProduct) {
        if (otherStoreProduct[item] !== null) {
          for (var product in otherStoreProduct[item].products) {
            if (otherStoreProduct[item].products[product] !== null) {
              let obj = {};
              obj.isAdd = false;
              obj.count = otherStoreProduct[item].products[product].count;
              obj.amount = otherStoreProduct[item].products[product].amount;
              countForPageLoad.push(obj);
            }
          }
        }
      }
      this.setState({productList: productList});
      if (countForPageLoad.length > 0) {
        let amount = 0;
        let count = 0;
        let i = 0;
        for (var item in countForPageLoad) {
          if (
            countForPageLoad[item].count !== undefined &&
            countForPageLoad[item].count !== 0
          ) {
            amount +=
              parseInt(countForPageLoad[item].amount) *
              countForPageLoad[item].count;
            count += countForPageLoad[item].count;
          }
        }
        this.setState({productCount: count, productAmount: amount});
        if (count !== 0) {
          this.setState({isViewCart: true});
        } else {
          this.setState({isViewCart: false});
        }
      }
    }
    this.setState({productList: productList, storeDetail: storeDetail}, () => {
      this.setState({isLoading: false});
    });
  };

  componentDidUpdate = async prevProps => {
    if (this.props.route.params.storeId !== prevProps.route.params.storeId) {
      this.state = {
        isLoading: false,
        productList: [],
        infoMessage: '',
        storeDetail: {},
        countDetail: [],
        isViewCart: false,
        productCount: 0,
        productAmount: 0,
      };
      this.setState({isLoading: true, productCount: 0, productAmount: 0});
      const storedId = this.props.route.params.storeId;
      this.onPageLoad();
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
    this.setState({productList: list});
    this.checkCountDetails(
      this.state.storeDetail.id,
      item.id,
      item.count,
      item.sale_price,
    );
  };
  handleQuantityChange = (item, type) => {
    if (this.state.isRunning) return;
    // this.state.isRunning = true;
    this.setState({isRunning: true}, () => {});

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
    this.setState({productList: list});
    this.checkCountDetails(
      this.state.storeDetail.id,
      item.id,
      item.count,
      item.sale_price,
    );
    this.setState({isRunning: false});
    this.state.isRunning = false;
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
      this.state.countDetail = result.slice();
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
      // let isValueDeleted = await this.removeDataToStorage('Cart');
      // if (isValueDeleted) {
      await AsyncStorage.setItem('Cart', JSON.stringify(storeCount));
      // }
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

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <MenuLoader />
        ) : (
          <View style={{flex: 1}}>
            <StatusBarComponent styleType={0} />
            <Header
              navigationScreenValue="HomeScreen"
              navigation={this.props.navigation}
            />
            {/* <Image
            source={{
              uri: this.state.storeDetail.banner,
            }}
            style={{ width: '100%', height: 100 }}
            PlaceholderContent={<ActivityIndicator isLoading={true} />}
          /> */}
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View style={{height: 70}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.2}}>
                    <Avatar
                      rounded
                      size="large"
                      containerStyle={{margin: 5}}
                      source={{
                        uri: this.state.storeDetail.gravatar,
                      }}
                    />
                  </View>
                  <View style={{flex: 0.6, marginLeft: 20}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 10,
                      }}>
                      {this.state.storeDetail.store_name}
                    </Text>
                    <Text style={{fontSize: 10}}>Description</Text>
                    <Text style={{fontSize: 10, marginTop: 5}}>
                      <Icon name="star" size={10} color="grey" /> 0 reviews
                    </Text>
                  </View>
                  {/* <View style={{flex: 0.2, marginTop: 30, marginRight: 20}}>
                    <Rating
                      style={{width: 20, backgroundColor: 'transparent'}}
                      imageSize={20}
                    />
                    <Text style={{fontSize: 10, marginTop: 10}}>0 reviews</Text>
                  </View> */}
                </View>
              </View>
              <View style={{height: 20}}>
                <Line />
              </View>
              {/* <View style={{height: 50}}>
                {this.state.storeDetail.store_open_close && <OpeningHour {...this.state} />}
              </View> */}
              <View style={{height: 20}}>
                <Line />
              </View>
              {this.state.productList.length > 0 && (
                <Product
                  {...this.state}
                  onAddHandler={product => this.onAddHandler(product)}
                  storeId={this.props.route.params.storeId}
                  handleQuantityChange={(item, type) => {
                    this.handleQuantityChange(item, type);
                  }}
                />
              )}
            </View>
            {this.state.isViewCart && (
              <ViewCart
                productCount={this.state.productCount}
                productAmount={this.state.productAmount}
              />
            )}
          </View>
        )}
      </>
    );
  }
}

export default ProductsScreen;
