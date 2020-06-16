import React, { Component } from 'react';
import { Text, Image, Avatar, Rating } from 'react-native-elements';
import { SafeAreaView, View, ScrollView } from 'react-native';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Header from '../../components/Header/Header';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityContainer';
import Line from '../../components/Line/Line';
import ProductAPI from '../../api/Products/ProductAPI';
import OpeningHour from '../../components/OpeningHour/OpeningHour';
import Product from "../../components/Products/Product";

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      productList: [],
      infoMessage: '',
      storeDetail: {},
    };
  }

  componentDidMount = async () => {
    const storeDetail = await ProductAPI.GetStoreBasedonStoreId(2);
    const productList = await ProductAPI.GetProductBasedonStoreId(2);
    this.setState({ storeDetail });
    this.setState({ productList });
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <StatusBarComponent styleType={0} />
          <Header navigation={this.props.navigation} titleValue="Products" />
          <Image
            source={{
              uri: this.state.storeDetail.banner,
            }}
            style={{ width: '100%', height: 100 }}
            PlaceholderContent={<ActivityIndicator isLoading={true} />}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{ height: 85 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.2 }}>
                  <Avatar
                    rounded
                    size="large"
                    containerStyle={{ margin: 5 }}
                    source={{
                      uri: this.state.storeDetail.gravatar,
                    }}
                  />
                </View>
                <View style={{ flex: 0.6, marginLeft: 20 }}>
                  <Text
                    style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                    {this.state.storeDetail.store_name}
                  </Text>
                  <Text style={{ fontSize: 10 }}>Description</Text>
                </View>
                <View style={{ flex: 0.2, marginTop: 30, marginRight: 20 }}>
                  <Rating
                    style={{ width: 20, backgroundColor: 'transparent' }}
                    imageSize={20}
                  />
                  <Text style={{ fontSize: 10, marginTop: 10 }}>0 reviews</Text>
                </View>
              </View>
            </View>
            <View style={{ height: 20 }}>
              <Line />
            </View>
            <View style={{ height: 50 }}>
              {
                this.state.storeDetail.id && <OpeningHour {...this.state} />
              }
            </View>
            <View style={{ height: 20 }}>
              <Line />
            </View>
            {
              this.state.productList.length > 0 && <Product {...this.state} />
            }
          </View>
        </SafeAreaView>
      </ScrollView >
    );
  }
}

export default ProductsScreen;
