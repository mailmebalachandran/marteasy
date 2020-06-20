import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import Header from '../../components/Header/Header';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Slider from '../../components/Slider/Slider';
import StoreList from '../../components/StoreList/StoreList';
import HomeAPI from '../../api/Home/HomeAPI';
import Toast, {DURATION} from 'react-native-easy-toast';
import * as Images from '../../assets/index';
import MenuLoader from '../../components/Loader/MenuLoader';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShopList: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    this.setState({isLoading: true});
    this.getStoresOnLoad();
  };

  getStoresOnLoad = async () => {
    let result = await HomeAPI.GetStores();
    if (result !== undefined) {
      this.setState({ShopList: result}, () => {
        this.setState({isLoading: false});
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {this.state.isLoading ? (
          <MenuLoader />
        ) : (
          <>
            <ScrollView>
              <StatusBarComponent styleType={0} />
              <Slider dataValues={topPicks} />
              <Text
                style={{
                  backgroundColor: 'white',
                  marginLeft: 10,
                  marginTop: 20,
                }}>
                Featured Stores
              </Text>
              <StoreList
                dataValues={this.state.ShopList}
                navigation={this.props.navigation}
              />
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
