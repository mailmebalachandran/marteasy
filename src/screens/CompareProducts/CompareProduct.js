import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CompareProductAPI from '../../api/CompareProduct/CompareProductAPI';
import Product from '../../components/Products/Product';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import {Avatar} from 'react-native-elements';
import * as Images from '../../assets/index';
import AddCart from '../../components/AddCart/AddCart';
import NetInfo from '@react-native-community/netinfo';
import ViewCart from '../../components/ViewCart/ViewCart';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Header from '../../components/Header/Header';

class CompareProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      productList: [],
      infoMessage: '',
      firstCompareProductDetail: {},
      countDetail: [],
      isViewCart: false,
      productCount: 0,
      productAmount: 0,
      tagId: 0,
      isRunning: false,
      isShowError: false,
      IsInternetConnected: true,
    };
  }

  handleConnectivityChange = isConnected => {
    if (isConnected.isConnected == true) {
      this.setState({IsInternetConnected: true});
    } else {
      this.setState({IsInternetConnected: false});
    }
  };

  componentDidMount = async () => {
    this.OnPageLoad();
  };

  OnPageLoad = async () => {
    this.setState({isLoading: true, tagId: this.props.route.params.tagId});
    NetInfo.addEventListener(this.handleConnectivityChange);
    NetInfo.fetch().done(isConnected => {
      if (isConnected.isConnected == true) {
        this.setState({IsInternetConnected: true});
      } else {
        this.setState({IsInternetConnected: false});
      }
    });
    const tagId = this.props.route.params.tagId;
    let productList = await CompareProductAPI.GetCompareProducts(this.props.route.params.tagId);

    let firstCompareProductDetail = await CompareProductAPI.GetProductBasedonProductId(
      this.props.route.params.productId
    );
    let element = {};
    element = firstCompareProductDetail;
    element.count = 0;
    element.isAdd = true;

    this.setState({
      firstCompareProductDetail: element,
    });
    if (
      firstCompareProductDetail !== undefined &&
      firstCompareProductDetail.isError !== undefined &&
      firstCompareProductDetail.isError === true
    ) {
      this.setState({isShowError: true, isLoading: false});
    }
    if (
      productList !== undefined &&
      productList.isError !== undefined &&
      productList.isError === true
    ) {
      this.setState({isShowError: true, isLoading: false});
    }

    let updatedProductList = productList.filter(function(item) {
      return item.id !== firstCompareProductDetail.id;
    });
    let list = [];
    this.state.list = [];
    let asyncDetails = await AsyncStorage.getItem('Cart');
    if (asyncDetails != null) {
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      });
      let currentStoreProduct = result.filter(function(item) {
        return item.storeId === 0;
      });
      let compareProductId = 0;
      let countForPageLoad = [];
      let obj = {};
      for (var item in result) {
        if (result[item].products.length > 0) {
          for (var product in result[item].products) {
            if (
              result[item].products[product] !== null &&
              result[item].products[product].productId ===
                this.state.firstCompareProductDetail.id
            ) {
              obj.isAdd = false;
              obj.count = result[item].products[product].count;
              obj.amount = result[item].products[product].amount;
              compareProductId = result[item].products[product].productId;
              //countForPageLoad.push(obj);
            }
          }
        }
      }
      let objectValue = {};
      if(compareProductId !== 0){
        objectValue = this.state.firstCompareProductDetail;
        objectValue.count = obj.count;
        objectValue.amount = obj.amount;
        objectValue.isAdd = false;
      }

      this.setState({firstCompareProductDetail:objectValue});

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
        return item.storeId !== 0;
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

      this.setState({productList: updatedProductList});
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
    this.setState({productList: productList}, () => {
      this.setState({isLoading: false});
    });
  };

  componentDidUpdate = async prevProps => {
    if (this.props.route.params.tagId !== prevProps.route.params.tagId) {
      this.state = {
        isLoading: false,
        productList: [],
        firstCompareProductDetail:{},
        infoMessage: '',
        storeDetail: {},
        countDetail: [],
        isViewCart: false,
        productCount: 0,
        productAmount: 0,
      };
      this.setState({isLoading: true, productCount: 0, productAmount: 0});
      this.onPageLoad();
    }
  };

  onAvatarImage = item => {
    console.log(item.gravatar);
    if (item.gravatar !== undefined) {
      if (
        item.gravatar.includes(CommonConstants.NOSTOREDEFAULT_TEXT_TO_SEARCH)
      ) {
        return (
          <Avatar
            rounded
            size="large"
            containerStyle={{margin: 5}}
            source={Images.NOSTORE}
          />
        );
      } else {
        return (
          <Avatar
            rounded
            size="large"
            containerStyle={{margin: 5}}
            source={{uri: item.gravatar}}
          />
        );
      }
    } else {
      return (
        <Avatar
          rounded
          size="large"
          containerStyle={{margin: 5}}
          source={Images.NOSTORE}
        />
      );
    }
  };

  onAvatarImageHeaderProduct = () => {
    if (
      this.state.firstCompareProductDetail !== undefined &&
      Object.keys(this.state.firstCompareProductDetail).length !== 0
    ) {
      if (this.state.firstCompareProductDetail.images.length > 0) {
        return (
          <View style={{width: '20%'}}>
            <Avatar
              size="large"
              source={{uri: this.state.firstCompareProductDetail.images[0].src}}
            />
          </View>
        );
      } else {
        return (
          <View style={{width: '20%'}}>
            <Avatar size="large" source={Images.NODISH} />
          </View>
        );
      }
    }
  };

  onAddHandlerForCompareProduct = item => {
    let list = {};
    list = this.state.firstCompareProductDetail;
    list.isAdd = false;
    list.count++;
    this.setState({firstCompareProductDetail: list});
    this.checkCountDetails(item.store.id, item.id, item.count, item.sale_price);
  };

  handleQuantityChangeCompareProduct = (item, type) => {
    if (this.state.isRunning) return;
    // this.state.isRunning = true;
    this.setState({isRunning: true}, () => {});

    let list = {};
    list = this.state.firstCompareProductDetail;

    if (list.count > 0) {
      type === 'INC' ? list.count++ : list.count--;
    }
    if (list.count === 0) {
      list.isAdd = true;
    }
    this.setState({firstCompareProductDetail: list});
    this.checkCountDetails(item.store.id, item.id, item.count, item.sale_price);
    this.setState({isRunning: false});
    this.state.isRunning = false;
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
    this.checkCountDetails(item.store.id, item.id, item.count, item.sale_price);
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
    this.checkCountDetails(item.store.id, item.id, item.count, item.sale_price);
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
      <View style={{flex: 1}}>
        <StatusBarComponent styleType={0} />
        <Header
          navigationScreenValue="Products"
          navigation={this.props.navigation}
          navigateValue="HomeScreen"
        />
        <View style={styles.productScreenContainer}>
          <View style={styles.productContainer}>
            <View style={styles.imageViewContainerStyle}>
              {this.onAvatarImageHeaderProduct()}
              <View>
                <View style={styles.productViewContainerStyle}>
                  <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>
                      {this.state.firstCompareProductDetail.name}
                    </Text>
                  </View>
                </View>
                <View style={styles.priceViewContainerStyle}>
                  <View style={styles.pricingContainer}>
                    {this.state.firstCompareProductDetail.regular_price !==
                      '' &&
                      this.state.firstCompareProductDetail.regular_price !==
                        null &&
                      this.state.firstCompareProductDetail.regular_price !==
                        undefined && (
                        <Text style={styles.regularPrice}>
                          Rs.
                          {this.state.firstCompareProductDetail.regular_price}
                        </Text>
                      )}
                    <Text style={styles.salePrice}>
                      Rs.{this.state.firstCompareProductDetail.sale_price}
                    </Text>
                  </View>
                  <View style={styles.addCartOuterViewContainerStyle}>
                    <View style={styles.imageViewContainerStyle}>
                      <AddCart
                        productValue={this.state.firstCompareProductDetail}
                        onAddHandler={product => {
                          this.onAddHandlerForCompareProduct(product);
                        }}
                        handleQuantityChange={(product, type) => {
                          this.handleQuantityChangeCompareProduct(
                            product,
                            type,
                          );
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {this.state.productList.length > 0 && (
          <Product
            {...this.state}
            onAddHandler={product => this.onAddHandler(product)}
            handleQuantityChange={(item, type) => {
              this.handleQuantityChange(item, type);
            }}
            isCompareProduct={false}
            navigation={this.props.navigation}
          />
        )}
        {this.state.isViewCart && (
          <ViewCart
            productCount={this.state.productCount}
            productAmount={this.state.productAmount}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}
export default CompareProduct;
