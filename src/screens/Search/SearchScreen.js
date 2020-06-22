import React, {Component} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  Text,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {SearchBar, Avatar, Divider} from 'react-native-elements';
import * as Images from '../../assets/index';
import styles from './styles';
import Axios from 'axios';
import SearchAPI from '../../api/Search/SearchAPI';
import * as ThemeColor from '../../themes/colors';
import AddCart from '../../components/AddCart/AddCart';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoaded: false,
      search: '',
      productList: [],
      isLoadingSearch: false,
    };
  }

  onSubmitHandler = async () => {};

  onAvatarImage = item => {
    if (item.images.length > 0) {
      return <Avatar size="large" source={{uri: item.images[0].src}} />;
    } else {
      return <Avatar size="large" source={Images.NODISH} />;
    }
  };

  onChangeTextHandler = async searchText => {
    if (searchText !== '') {
      this.setState({isLoadingSearch: true});
      let productDetails = await SearchAPI.GetProductBasedOnSearch(searchText);
      this.setState({productList: productDetails}, () => {
        this.setState({isLoadingSearch: false});
      });
    } else {
      this.setState({productList: []});
    }
  };

  render() {
    return (
      <View style={{padding: 0}}>
        <StatusBarComponent styleType={0} />
        <SearchBar
          placeholder="Type Here..."
          containerStyle={{backgroundColor: ThemeColor.PrimaryColor}}
          inputContainerStyle={{backgroundColor: ThemeColor.DarkColor, color: ThemeColor.DarkTextColor}}
          placeholderTextColor={ThemeColor.DarkTextColor}
          searchIcon={{color: ThemeColor.DarkTextColor}}
          cancelIcon={{color: ThemeColor.DarkTextColor}}
          inputStyle={{color: ThemeColor.DarkTextColor}}
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
                  style={{marginLeft: 10, flex: 1, flexDirection: 'column'}}>
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
                <View style={{justifyContent: 'center'}}>
                  <AddCart
                    productValue={item}
                    // onAddHandler={item => {
                    //   this.props.onAddHandler(item);
                    // }}
                    // handleQuantityChange={(product, type) => {
                    //   this.props.handleQuantityChange(item, type);
                    // }}
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
    );
  }
}

export default SearchScreen;
