import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Image,
} from 'react-native';
import { Text } from 'react-native-elements';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Slider from '../../components/Slider/Slider';
import StoreList from '../../components/StoreList/StoreList';
import HomeAPI from '../../api/Home/HomeAPI';
import Toast, { DURATION } from 'react-native-easy-toast';
import MenuLoader from '../../components/Loader/MenuLoader';
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import Octicons from "react-native-vector-icons/Octicons";
import Anticons from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import ErrorOverlay from '../../components/Errors/ErrorOverlay';
import NetInfo from '@react-native-community/netinfo';
import {
  HOME_BANNER_IMAGE1,
  HOME_BANNER_IMAGE2,
  HOME_BANNER_IMAGE3,
  HOME_BANNER_IMAGE4,
  HOME_PROMO_1,
  HOME_PROMO_2,
  HOME_PROMO_3,
} from "../../assets/index";
import styles from './styles';
import MainCategory from "./MainCategory";
import CategoryList from "./CategoryList";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import MustHave from "./MustHave";
import { transformCategoryList } from "./utils";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShopList: [],
      isLoading: true,
      refreshing: false,
      isShowError: false,
      IsInternetConnected: true,
      categoryList: [],
      promoImages: [
        HOME_PROMO_2,
        HOME_PROMO_3
      ]
    };
  }

  componentDidMount = () => {
    console.log("did mount");
    this.setState({ isLoading: true });
    NetInfo.addEventListener(this.handleConnectivityChange);
    NetInfo.fetch().done((isConnected) => {
      if (isConnected.isConnected == true) {
        this.setState({ IsInternetConnected: true })
      }
      else {
        this.setState({ IsInternetConnected: false })
      }
    });

    this.getStoresOnLoad();
    this.getCategoriesOnLoad();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({ isLoading: true });
      this.getStoresOnLoad();
      this.getCategoriesOnLoad();
    });

  };
  handleConnectivityChange = (isConnected) => {
    if (isConnected.isConnected == true) {
      this.setState({ IsInternetConnected: true })
    }
    else {
      this.setState({ IsInternetConnected: false })
    }
  }

  getStoresOnLoad = async () => {
    let result = await HomeAPI.GetStores();
    if (result !== undefined && result.isError !== undefined && result.isError === true) {

      this.setState({ isShowError: true, isLoading: false });
    }
    else if (result !== undefined) {
      this.setState({ ShopList: result }, () => {
        this.setState({ isLoading: false, isShowError: false });
      });
    }
  };
  getCategoriesOnLoad = async () => {
    let result = await HomeAPI.getParentCategories();
    transformCategoryList(result);
    if (result !== undefined && result.isError !== undefined && result.isError === true) {
      this.setState({ isShowError: true, isLoading: false });
    }
    else if (result !== undefined) {
      this.setState({ categoryList: result }, () => {
        this.setState({ isLoading: false, isShowError: false });
      });
    }
  };

  _onRefresh = () => {
    this.getStoresOnLoad();
    this.getCategoriesOnLoad();
  }

  render() {
    const bannerImages = [
      HOME_BANNER_IMAGE1,
      HOME_BANNER_IMAGE2,
      HOME_BANNER_IMAGE3,
      HOME_BANNER_IMAGE4,
    ];
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {!this.state.IsInternetConnected ? <ErrorOverlay errorType={"NetWork"} /> : this.state.isLoading ? (
          <MenuLoader />
        ) : false ? <ErrorOverlay errorType={"API"} reload={this.componentDidMount} /> : (
          <>
            <HomeHeader
              headerTitle="MartEasy"
              navigation={this.props.navigation}
            />
            <ScrollView refreshControl={<RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />}>
              <StatusBarComponent styleType={0} />
              <View style={{ flex: 1 }}>
                <View style={styles.bannerContainer}>
                  <Slider
                    images={bannerImages}
                    autoplay={true}
                    isLoop={true}
                  />
                </View>
                <View style={{ marginTop: 10, backgroundColor: 'white' }}>
                  <Text
                    style={styles.titleText}>
                    <Anticons name="appstore-o" size={20} color="grey" />
                    {'  '}Shop By Category
                </Text>
                  <MainCategory 
                    categories={transformCategoryList(this.state.categoryList, true)}
                    navigation={this.props.navigation}
                  />
                  <CategoryList
                    categories={transformCategoryList(this.state.categoryList, false)}
                    navigation={this.props.navigation}
                  />
                </View>
                <View style={styles.promoContainer}>
                  <Slider
                    images={this.state.promoImages}
                    autoplay={true}
                    isLoop={true}
                  />
                </View>
                <View style={{ marginTop: 10, backgroundColor: 'white' }}>
                  <Text
                    style={styles.titleText}>
                    <Octicons name="checklist" size={20} color="grey" />
                    {'  '}Seasons Must Have
                </Text>
                  <MustHave
                    dataValues={this.state.ShopList}
                    navigation={this.props.navigation}
                  />
                </View>
                <View style={styles.promoContainer}>
                  <Image
                    style={styles.promoImage}
                    source={HOME_PROMO_1}
                  />
                </View>
                <View style={{ marginTop: 10, backgroundColor: 'white' }}>
                  <Text
                    style={styles.titleText}>
                    <Entypo name="new" size={20} color="grey" />
                    {'  '}Featured Stores
                </Text>
                  <StoreList
                    dataValues={this.state.ShopList}
                    navigation={this.props.navigation}
                  />
                </View>
                <Toast
                  ref="toast"
                  style={{ backgroundColor: '#dfdfdf' }}
                  position="top"
                  positionValue={100}
                  fadeInDuration={750}
                  fadeOutDuration={1000}
                  opacity={0.8}
                  textStyle={{ color: 'black' }}
                />
              </View>
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
