import React, {Component} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  Text,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {SearchBar, Avatar, Divider, Overlay} from 'react-native-elements';
import * as Images from '../../assets/index';
import styles from './styles';
import Axios from 'axios';
import SearchAPI from '../../api/Search/SearchAPI';
import * as ThemeColor from '../../themes/colors';
import AddCart from '../../components/AddCart/AddCart';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import ViewCart from '../../components/ViewCart/ViewCart';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuLoader from '../../components/Loader/MenuLoader';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      search: '',
      productList: [],
      isLoadingSearch: false,
      countDetail: [],
      isViewCart: false,
      productCount: 0,
      productAmount: 0,
      storeId: 0,
      productInAsyncDetails: []
    };
  }

  componentDidMount = async () => {
    this.onPageLoad();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.onPageLoad();
    });
  };

  onPageLoad = async () => {
    let list = [];
    this.state.list = [];
    let asyncDetails = await AsyncStorage.getItem('Cart');
    if (asyncDetails != null) {
      let asyncDetailsTemp = JSON.parse(asyncDetails);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      });

      let countForPageLoad = [];
      let otherStoreProduct = result.filter(function(item) {
        return item.storeId !== '';
      });
      for (var item in otherStoreProduct) {
        if (otherStoreProduct[item] !== null) {
          for (var product in otherStoreProduct[item].products) {
            if (otherStoreProduct[item].products[product] !== null) {
              let obj = {};
              obj.isAdd = false;
              obj.count = otherStoreProduct[item].products[product].count;
              obj.amount = otherStoreProduct[item].products[product].amount;
              obj.productId =
                otherStoreProduct[item].products[product].productId;
              obj.storeId = otherStoreProduct[item].storeId;
              countForPageLoad.push(obj);
            }
          }
        }
      }
      this.setState({productInAsyncDetails: countForPageLoad});
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
              parseFloat(countForPageLoad[item].amount) *
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

  onSubmitHandler = async () => {};

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

  onChangeTextHandler = async searchText => {
    if (searchText !== '') {
      this.setState({isLoadingSearch: true});
      let productDetails = await SearchAPI.GetProductBasedOnSearch(searchText);
      let productList = productDetails;
      let productListWithAdd = [];

      productList.map(item => {
        let element = [];
        element = item;

        let resultValue = this.state.productInAsyncDetails.filter(prod => {
          return prod.storeId === item.store.id && prod.productId === item.id;
        });

        if (
          resultValue === null ||
          resultValue === undefined ||
          resultValue.length === 0
        ) {
          element.count = 0;
          element.isAdd = true;
        } else {
          for (var i in resultValue) {
            element.count = resultValue[i].count;
            element.isAdd = false;
          }
        }
        productListWithAdd.push(element);
      });
      this.setState({productList: productListWithAdd}, () => {
        this.setState({isLoadingSearch: false});
      });
    } else {
      this.setState({productList: []});
    }
  };

  render() {
    return (
      <View style={{flex: 1, padding: 0}}>
        <StatusBarComponent styleType={0} />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <SearchBar
            placeholder="Search products"
            containerStyle={{
              backgroundColor: 'transparent',
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent',
            }}
            inputContainerStyle={{
              backgroundColor: '#ebebeb',
              color: ThemeColor.DarkTextColor,
              borderRadius:0,
              height: 45,
            }}
            placeholderTextColor='grey'
            searchIcon={
              <Icon name="search" size={15} color='#000' />
            }
            cancelIcon={{color: ThemeColor.DarkTextColor}}
            inputStyle={{
              color: '#000',
              fontSize: 14,
              paddingLeft: 0,
            }}
            showLoading={this.state.isLoadingSearch}
            onChangeText={text => {
              this.setState({search: text});
              this.onChangeTextHandler(text);
            }}
            value={this.state.search}
            onClear={() => {
              this.setState({productList: []});
            }}
          />
          <View style={styles.containerStyle}>
            <FlatList
              style={{backgroundColor: ThemeColor.DarkTextColor}}
              data={this.state.productList}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowOpacity: 0.48,
                    shadowRadius: 11.95,
                    elevation: 18,
                  }}>
                  {this.onAvatarImage(item)}
                  <View
                    style={{
                      marginLeft: 10,
                      flex: 1,
                      flexDirection: 'column',
                    }}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Text style={{color: 'grey', fontSize: 12}}>
                      {item.store.shop_name}
                    </Text>
                    <Text />
                    <Text style={{fontSize: 12, marginTop: -15}}>
                      Rs. {item.sale_price}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 80,
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
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
              )}
              keyExtractor={item => {
                item.id;
              }}
            />
          </View>
        </View>
        
        {this.state.isViewCart  && !this.state.isLoading && (
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

export default SearchScreen;
