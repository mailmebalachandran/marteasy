import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import {Text} from 'react-native-elements';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Slider from '../../components/Slider/Slider';
import StoreList from '../../components/StoreList/StoreList';
import HomeAPI from '../../api/Home/HomeAPI';
import Toast, {DURATION} from 'react-native-easy-toast';
import * as Images from '../../assets/index';
import MenuLoader from '../../components/Loader/MenuLoader';
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import ErrorOverlay from '../../components/Errors/ErrorOverlay'
// import NetInfo from '@react-native-community/netinfo'
import NetInfo from '@react-native-community/netinfo'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShopList: [],
      isLoading: true,
      refreshing: false,
      isShowError:false,
      IsInternetConnected:true,
    };
  }

  componentDidMount = () => {
    console.log("componentDidMount")
    this.setState({isLoading: true});
    

    NetInfo.addEventListener(this.handleConnectivityChange);

    NetInfo.fetch().done((isConnected) => {
      console.log('isConnected.fetch : ' + isConnected.isConnected)
      if (isConnected.isConnected == true) {
        this.setState({ IsInternetConnected: true })
      }
      else {
        this.setState({ IsInternetConnected: false })
      }
    });

    
    this.getStoresOnLoad();

  };

  // handleConnectivityChange = state => {
  //   console.log('handleConnectivityChange isConnected.fetch : ' + JSON.stringify(state.isConnected))
  //   if (state.isConnected) {
  //     this.setState({ IsInternetConnected: true })
  //   } else {
  //     this.setState({ IsInternetConnected: false })
  //   }
  // };


  handleConnectivityChange = (isConnected) => {
    console.log('handleConnectivityChange isConnected : ' + isConnected.isConnected)
    if (isConnected.isConnected == true) {
      this.setState({ IsInternetConnected: true })
    }
    else {
      this.setState({ IsInternetConnected: false })
    }
  };

  getStoresOnLoad = async () => {
    let result = await HomeAPI.GetStores();
    console.log('result :' + result.isError)
    if(result !== undefined && result.isError !== undefined && result.isError === true){

this.setState({isShowError:true, isLoading: false});
    }
    else if (result !== undefined) {
      this.setState({ShopList: result}, () => {
        this.setState({isLoading: false, isShowError:false});
      });
    }
  };

  _onRefresh = () => {
    this.getStoresOnLoad();
  }

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
        { !this.state.IsInternetConnected ? <ErrorOverlay errorType={"NetWork"} /> : this.state.isLoading ? (
          <MenuLoader />
        ) : this.state.isShowError ? <ErrorOverlay errorType={"API"} reload={this.componentDidMount} /> : (
          <>
            <ScrollView refreshControl={<RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />}>   
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
