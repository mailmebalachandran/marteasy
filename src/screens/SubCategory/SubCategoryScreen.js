import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView, Image } from 'react-native';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';
import Header from '../../components/Header/Header';
import ErrorOverlay from '../../components/Errors/ErrorOverlay';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Images from '../../assets/index';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '../../components/Slider/Slider';
import {
  FRUIT_BANNER_IMAGE1,
  FRUIT_BANNER_IMAGE2,
  FRUIT_BANNER_IMAGE3,
  FRUIT_BANNER_IMAGE4
} from "../../assets/index";
import CategoryList from "../Home/CategoryList";
import Anticons from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainCategory from "../Home/MainCategory";
import { transformCategoryList } from "../Home/utils";
import SubcategoryAPI from '../../api/Home/SubcategoryAPI';
import unescape from 'unescape';
import { isShowStore, transformToStoreData, getOrderedRestaurantSubCats } from "./utils";
import ActivityContainer from "../../components/ActivityIndicator/ActivityContainer";

class SubCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      productList: [],
      infoMessage: '',
      storeDetail: {},
      countDetail: [],
      isViewCart: false,
      productCount: 0,
      productAmount: 0,
      storeId: 0,
      isRunning: false,
      isShowError: false,
      promoImages: [
        FRUIT_BANNER_IMAGE1,
        FRUIT_BANNER_IMAGE2,
        FRUIT_BANNER_IMAGE3,
        FRUIT_BANNER_IMAGE4
      ],
      IsInternetConnected: true,
      categoryList: [],
      SubCategoryList: [],
      isShowStore: false,
    };
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    this.getSubCategoriesOnLoad(this.props.route.params.catId);
  }

  getSubCategoriesOnLoad = async (catId) => {
    const showStore = isShowStore(this.props.route.params.catName);
    this.setState({ isShowStore: showStore });
    let result = showStore ?
      await SubcategoryAPI.getCatgeoryProducts(catId) :
      await SubcategoryAPI.getparentSubCategories(catId);

    result = showStore ? transformToStoreData(result) : result;

    if (result !== undefined && result.isError !== undefined && result.isError === true) {
      this.setState({ isShowError: true, isLoading: false });
    }
    else if (result !== undefined) {
      this.setState({ SubCategoryList: result }, () => {
        this.setState({ isLoading: false, isShowError: false });
      });
    }
  };
  getTransformedList = (subCatList) => {
    console.log("catlist", subCatList);
    const restaruantPatt = new RegExp("RESTAURANT");
    let name = catName.toUpperCase();
    if (restaruantPatt.test(name)) {
        return getOrderedRestaurantSubCats(subCatList);
    } else {
        return subCatList;
    }
  }

  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#cfcfd1' }}>
        <StatusBarComponent styleType={0} />
        <Header
          navigationScreenValue={this.props.route.params.catName}
          navigation={this.props.navigation}
          navigateValue = "HomeScreen"
        />
        <ScrollView>
          <View style={styles.promoContainer}>
            <Slider
              images={this.state.promoImages}
              autoplay={true}
              isLoop={true}
              dotColor={"#689f39"}
              sliderBoxHeight={175}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-start", backgroundColor: 'white', marginTop: 5 }}>
            <Text
              style={styles.titleText}>
              {/* <MaterialIcons name="fruit-cherries" size={20} color="grey" /> */}
              {'  '}Shop By {unescape(this.props.route.params.catName)}
            </Text>
            {this.state.isLoading ? <ActivityContainer />
              : (
                <CategoryList
                  categories={this.getTransformedList(this.state.SubCategoryList)}
                  navigation={this.props.navigation}
                  isShowStore={this.state.isShowStore}
                />
              )}

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SubCategoryScreen;
