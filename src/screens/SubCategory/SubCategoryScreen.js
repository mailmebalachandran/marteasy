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

class SubCategoryScreen extends Component {
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
      isShowError: false,
      promoImages: [
        FRUIT_BANNER_IMAGE1,
        FRUIT_BANNER_IMAGE2,
        FRUIT_BANNER_IMAGE3,
        FRUIT_BANNER_IMAGE4
      ],
      IsInternetConnected: true,
      categoryList: [],
      SubCategoryList:[]
    };
  }

  componentDidMount=async ()=>{
    console.log(this.props.route.params.catId);
    this.getSubCategoriesOnLoad(this.props.route.params.catId);
  }

  getSubCategoriesOnLoad = async (catId) => {
    console.log(catId)
    let result = await SubcategoryAPI.getparentSubCategories(catId);
    console.log(result[0]);
    transformCategoryList(result);
    if (result !== undefined && result.isError !== undefined && result.isError === true) {
      this.setState({ isShowError: true, isLoading: false });
    }
    else if (result !== undefined) {
      this.setState({ SubCategoryList: result }, () => {
        this.setState({ isLoading: false, isShowError: false });
      });
    }
  };
  render() {
    console.log(this.state.SubCategoryList[0]);
    return (

      <View style={{ flex: 1, backgroundColor: '#cfcfd1' }}>
        <StatusBarComponent styleType={0} />
        <Header
          navigationScreenValue={this.props.route.params.catName}
          navigation={this.props.navigation}
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
        <View style={{ flex: 1,justifyContent: "flex-start", backgroundColor: 'white',marginTop: 5 }}>
          <Text
            style={styles.titleText}>
            {/* <MaterialIcons name="fruit-cherries" size={20} color="grey" /> */}
            {'  '}Shop By {unescape(this.props.route.params.catName)}
                  </Text>
          <CategoryList
            categories={this.state.SubCategoryList}
            navigation={this.props.navigation}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default SubCategoryScreen;
