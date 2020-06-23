import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Slider from '../../components/Slider/Slider';
import StoreList from '../../components/StoreList/StoreList';
import CategoryList from '../../components/CategoryList/CategoryList';
import HomeAPI from '../../api/Home/HomeAPI';
import Toast, {DURATION} from 'react-native-easy-toast';
import * as Images from '../../assets/index';
import MenuLoader from '../../components/Loader/MenuLoader';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShopList: [],
      CategoryList: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    this.setState({isLoading: true});
    this.getStoresOnLoad();
    this.getCategoryOnLoad();
  };

  getStoresOnLoad = async () => {
    let result = await HomeAPI.GetStores();
    if (result !== undefined) {
      this.setState({ShopList: result}, () => {
        this.setState({isLoading: false});
      });
    }
  };

  getCategoryOnLoad = async () => {
    let result = await HomeAPI.GetCategories();
    if (result !== undefined) {
      this.setState({CategoryList: result}, () => {
        this.setState({isLoading: false});
        console.log('getCategoryOnLoad :' + JSON.stringify(result[0]))
      });
    }
  };

  render() {
    const topPicks = [
      {
        name: Images.IMAGE1,
        id: 1,
      },
      {
        name: Images.IMAGE2,
        id: 2,
      },
      {
        name: Images.IMAGE3,
        id: 3,
      },
      {
        name: Images.IMAGE4,
        id: 4,
      },
    ];
    return (
      <SafeAreaView style={{flex: 1}}>
        {this.state.isLoading ? (
          <MenuLoader />
        ) : (
          <>
            <ScrollView>
              <StatusBarComponent styleType={0} />
              <View style={{backgroundColor: 'white'}}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  <Icon name="thumbs-up" size={20} color="grey" />
                  {'  '}Top picks
                </Text>
                <Slider dataValues={topPicks} />
              </View>
              <View style={{marginTop: 10, backgroundColor: 'white'}}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    fontFamily: 'notoserif',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  <Icon name="glass-martini-alt" size={20} color="grey" />
                  {'  '}Category
                </Text>
                <CategoryList
                  dataValues={this.state.CategoryList}
                  navigation={this.props.navigation}
                />
              </View>
              <View style={{marginTop: 10, backgroundColor: 'white'}}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    fontFamily: 'notoserif',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  <Icon name="utensils" size={20} color="grey" />
                  {'  '}Featured Stores
                </Text>
                <StoreList
                  dataValues={this.state.ShopList}
                  navigation={this.props.navigation}
                />
              </View>
              
              <Toast
                ref="toast"
                style={{backgroundColor: '#dfdfdf'}}
                position="top"
                positionValue={100}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{color: 'black'}}
              />
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
