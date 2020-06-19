import React, {Component} from 'react';
import {View, Image, ActivityIndicator, Text, FlatList} from 'react-native';
import {SearchBar, Avatar, Divider} from 'react-native-elements';
import * as Images from '../../assets/index';
import styles from './styles';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoaded: false,
      search: '',
    };
  }

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
                  <Text style={{fontSize:15, fontWeight:'bold'}}>Jeera rice</Text>
                  <Text style={{color:'grey', fontSize:12}}>SingHotel</Text>
                  <Text></Text>
                  <Text style={{fontSize:12}}>$25</Text>
                </View>
                <View style={{justifyContent:'center'}}>
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
