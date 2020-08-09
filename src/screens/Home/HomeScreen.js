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
  MOTOR_WASH_IMAGE1,
  MOTOR_WASH_IMAGE2,
  MOTOR_WASH_IMAGE3,
  MOTOR_WASH_IMAGE8,
  HOME_SHOP_BY_CAT,
  SHOP_BY_CATEGORY,
  SEASONS_MUST_HAVE,
  FEATURED_STORES
} from "../../assets/index";
import styles from './styles';
import MainCategory from "./MainCategory";
import CategoryList from "./CategoryList";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import MustHave from "./MustHave";
import { transformCategoryList } from "./utils";
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import MotorScreen from '../../screens/MotorScreen/Motorscreen';
import ActivityContainer from "../../components/ActivityIndicator/ActivityContainer";
import { getOrderedParentCategories } from "../../utils";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShopList: [],
      isLoading: false,
      refreshing: false,
      isShowError: false,
      isPressed: false,
      IsInternetConnected: true,
      categoryList: [],
      constantsId: [],
      tagDetails: [],
      promoImages: [
        HOME_PROMO_2,
        HOME_PROMO_3
      ],
      isCatLoading: false,
    };
  }

  componentDidMount = () => {
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
    this.getConstantsOnLoad();

    // this._unsubscribe = this.props.navigation.addListener('focus', () => {
    //   this.getStoresOnLoad();
    //   this.getCategoriesOnLoad();
    // });

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
    this.setState({ isStoreLoading: true });
    let result = await HomeAPI.GetStores();
    if (result !== undefined && result.isError !== undefined && result.isError === true) {

      this.setState({ isShowError: true, isStoreLoading: false });
    }
    else if (result !== undefined) {
      this.setState({ ShopList: result }, () => {
        this.setState({ isStoreLoading: false, isShowError: false });
      });isCatLoading
    }
  };
  getCategoriesOnLoad = async () => {
    this.setState({ isCatLoading: true });
    let result = await HomeAPI.getParentCategories();
    if (result !== undefined && result.isError !== undefined && result.isError === true) {
      this.setState({ isShowError: true, isCatLoading: false });
    }
    else if (result !== undefined) {
      this.setState({ categoryList: result }, () => {
        this.setState({ isCatLoading: false, isShowError: false });
      });
    }
  };

  getConstantsOnLoad = async () => {
    let result = await HomeAPI.getConstants();
    if (result !== undefined && result.isError !== undefined && result.isError === true) {
      this.setState({ isShowError: true, isLoading: false });
    }
    else if (result !== undefined) {
      this.getTagDetailsOnLoad(result.motor_wash_tag_id);
      this.setState({ constantsId: result }, () => {
        this.setState({ isLoading: false, isShowError: false });
      });
    }
  };

  getTagDetailsOnLoad = async (id) => {
    let result = await HomeAPI.getTagDetails(id);
    if (result !== undefined && result.isError !== undefined && result.isError === true) {

      this.setState({ isShowError: true, isLoading: false });
    }
    else if (result !== undefined) {
      this.setState({ tagDetails: result }, () => {
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
      <SafeAreaView style={{ flex: 1, }}>
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
                  <Image source={SHOP_BY_CATEGORY} style={{ width: "100%" }} resizeMode={"contain"} />
                  {this.state.isCatLoading ? <ActivityContainer /> :
                    <MainCategory
                      categories={getOrderedParentCategories(this.state.categoryList)}
                      navigation={this.props.navigation}
                    />
                  }
                </View>
                <TouchableNativeFeedback onPress={() => {
                  this.props.navigation.navigate('MotorScreen',
                    { tagId: this.state.tagDetails.id });
                }}>
                  <View style={{ flex: 1, marginTop: "2%", marginBottom: "2%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                    <View>
                      <Image source={MOTOR_WASH_IMAGE8} />
                        <Text style={{
                          textTransform: "capitalize", fontWeight: "normal",
                          textAlign: 'center', margin: '5%',
                        }}>
                          {/*{this.state.tagDetails.name} */}
                          Motor Wash
                          </Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
                <View style={styles.promoContainer}>
                  <Slider
                    images={this.state.promoImages}
                    autoplay={true}
                    isLoop={true}
                  />
                </View>
                <View style={{ marginTop: 10, backgroundColor: 'white' }}>
                  <Image source={SEASONS_MUST_HAVE} style={{ width: "100%" }} resizeMode={"contain"} />
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
                  <Image source={FEATURED_STORES} style={{ width: "100%" }} resizeMode={"contain"} />
                  {this.state.isStoreLoading ? <ActivityContainer /> :
                  <StoreList
                    dataValues={this.state.ShopList}
                    navigation={this.props.navigation}
                  />
                }
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
