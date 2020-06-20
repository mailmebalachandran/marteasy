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
      storeId:0
    };
  }

  componentDidMount = async () => {
    this.setState({isLoading: true, storeId:this.props.route.params.storeId});

    const storeDetail = await ProductAPI.GetStoreBasedonStoreId(
      this.props.route.params.storeId,
    );
    const productList = await ProductAPI.GetProductBasedonStoreId(
      this.props.route.params.storeId,
    );

    let list = [];

    let asyncDetails = await AsyncStorage.getItem('Cart');
    if(asyncDetails != null){
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      })
    // this.state.countDetail = result.slice();
    console.log('result : ' + JSON.stringify(result))
    let currentStoreProduct =result.filter(function(item){
      return item.storeId == 19;
    })

    console.log('currentStoreProduct :' + JSON.stringify(currentStoreProduct))
    if(currentStoreProduct != null)
    {
      console.log(' true');
      console.log('currentStoreProduct : ' + JSON.stringify(currentStoreProduct))
      console.log('currentStoreProduct.storeId : ' + currentStoreProduct[0].storeId)
      console.log('currentStoreProduct.products : ' + currentStoreProduct[0].products)
      for (var item in currentStoreProduct[0].products) {
        productList.map(product => {
          console.log('currentStoreProduct.products[item].productId : ' + currentStoreProduct[0].products[item].productId)
          console.log('product.id : ' + product.id)
          if(currentStoreProduct[0].products[item].productId == product.id)
          {
            product.isAdd = false;
            product.count = currentStoreProduct[0].products[item].count;
            console.log('currentProduct.count :' + currentStoreProduct[0].products[item].count)
          }
          // console.log('product : ' + JSON.stringify(product))
          list.push(product);
          // console.log('list : ' + JSON.stringify(list))
        })
        
      }
    // productList.map(product => {

    //   let currentProduct = currentStoreProduct.filter(function(item){
    //     return item.products.productId == product.id;
    //   })
    //   console.log('currentProduct :' + currentProduct)
    //   if(currentProduct != null)
    //   {
    //     product.isAdd = false;
    //     product.count = currentProduct.products.count;
    //     console.log('currentProduct.count :' + currentProduct.count)
    //   }

    //   // // if (product.id === item.id) {
    //   // //   product.isAdd = false;
    //   // //   product.count++;
    //   // }
    //   list.push(product);
    // });
    this.setState({productList: list});
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
      const storeDetail = await ProductAPI.GetStoreBasedonStoreId(
        this.props.route.params.storeId,
      );
      const productList = await ProductAPI.GetProductBasedonStoreId(
        this.props.route.params.storeId,
      );
      this.setState(
        {productList: productList, storeDetail: storeDetail},
        () => {
          this.setState({isLoading: false});
        },
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
    this.setState({productList: list});
    this.checkCountDetails(
      this.state.storeDetail.id,
      item.id,
      item.count,
      item.sale_price,
    );
  };
  handleQuantityChange = (item, type) => {
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
  };

  checkCountDetails = async (storeId, productId, count, amount) => {
    let countDetail = [];

        this.state.countDetail = [];
    
    let asyncDetails = await AsyncStorage.getItem('Cart');
    if(asyncDetails != null){
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      })
    // console.log('Storage :' + result);
    // console.log('Before Count :' +this.state.countDetail.length);
    // console.log('Before store Count :' +result.length);
    this.state.countDetail = result.slice();
    // console.log('After Count :' +this.state.countDetail.length);
    }
    else
    {
      console.log('Else Storage : null');
    }

    if (this.state.countDetail.length > 0) {
      let storeCount = this.state.countDetail;
      for (var item in storeCount) {
        let isStoreAvailable = false;

        console.log('Loop store' + storeCount[item])
        console.log('Loop storeId ' + storeCount[item].storeId)
        console.log('Loop products len ' + storeCount[item].products.length)

        console.log('param storeId ' + storeId)

        if (
          storeCount[item].storeId === storeId &&
          storeCount[item].products.length > 0
        ) {
          let isProductAvailable = false;
          for (var product in storeCount[item].products) {
            if (storeCount[item].products[product].productId === productId) {
              storeCount[item].products[product].count = count;
              storeCount[item].products[product].amount = amount;
              isProductAvailable = true;
              isStoreAvailable = true;
              countDetail.push(storeCount[item]);
            }
          }
          if (!isProductAvailable) {
            let obj = {productId: productId, count: count, amount: amount};
            console.log(storeCount[item].products[0]);
            if (storeCount[item].products[product] === null)
              storeCount[item].products = [];
            storeCount[item].products.push(obj);
            isStoreAvailable = true;
            countDetail.push(storeCount[item]);
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
          countDetail.push(storeObj);
        }
      }
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
          this.storeDataToStorage();
        });
      }
    } else {
      //StoreObject
      var storeObj = {};
      storeObj.storeId = storeId;
      storeObj.products = [];

      //Product object
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
          this.storeDataToStorage();
        });
      }
    }
  };

  storeDataToStorage = async () => {
    try {
      let isValueDeleted = await this.removeDataToStorage('Cart');
      if (isValueDeleted) {
        await AsyncStorage.setItem(
          'Cart',
          JSON.stringify(this.state.countDetail),
        );
        this.getDataToStorage();
      }
    } catch (err) {
      console.log('Error Details ' + err);
    }
  };

  getDataToStorage = async () => {
    try {
      let value = await AsyncStorage.getItem('Cart');
      console.log(JSON.stringify(value));
    } catch (err) {
      console.log(err);
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
                    <Text style={{fontSize: 10, marginTop:5}}><Icon name="star" size={10} color='grey'></Icon> 0 reviews</Text>
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
              <View style={{height: 50}}>
                {this.state.storeDetail.id && <OpeningHour {...this.state} />}
              </View>
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
              <View
                style={{
                  backgroundColor: ThemeColor.PrimaryColor,
                  height: 50,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <View style={{marginRight: 20, justifyContent: 'center'}}>
                    <Text style={{color: ThemeColor.DarkTextColor}}>
                      {this.state.productCount} item
                      {this.state.productCount > 1 ? 's ' : ' '} |{'  '}
                      <Icon name="rupee" size={10} /> {this.state.productAmount}
                    </Text>
                  </View>
                  <View style={{width: '30%'}} />
                  <View style={{marginRight: 10, justifyContent: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('Cart', {
                          countDetail: this.state.countDetail,
                        });
                      }}>
                      <Text style={{color: ThemeColor.DarkTextColor}}>
                        View Cart
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginRight: 30, justifyContent: 'center'}}>
                    <Icon
                      name="shopping-cart"
                      size={20}
                      color={ThemeColor.DarkTextColor}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
        )}
      </>
    );
  }
}

export default ProductsScreen;
