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

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoaded: false,
      search: '',
    };
  }

  componentDidMount = async () => {
    //await AsyncStorage.removeItem('Cart');
    let value = await AsyncStorage.getItem('Cart');
    if (value != null) {
      let asyncDetailsTemp = JSON.parse(value);
      let result = Object.keys(asyncDetailsTemp).map(function(k) {
        return asyncDetailsTemp[k];
      });
      for(var item in result){
        for(var product in result[item].products){
          console.log(result[item].products[product]);
        }
      }
    }
    console.log(value);
    Axios.get(
      'https://marteasy.vasanthamveliyeetagam.com/wp-json/wc/v3/products/categories/49',
      {
        params: {
          consumer_key: 'ck_6dcda63598acde7f3c8f52a07095629132ca84ed',
          consumer_secret: 'cs_8757c7474b8093821cec8468c09a2cacb9ccb65c',
        },
      },
    )

      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSubmitHandler = async () => {};

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
      <View>
        <SearchBar placeholder="Type Here..." />
        <View style={styles.containerStyle}>
          <FlatList
            data={topPicks}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                <Avatar size="large" source={item.name} />

                <View
                  style={{marginLeft: 10, flex: 1, flexDirection: 'column'}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    Jeera rice
                  </Text>
                  <Text style={{color: 'grey', fontSize: 12}}>SingHotel</Text>
                  <Text />
                  <Text style={{fontSize: 12}}>$25</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text>Balchandran</Text>
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
