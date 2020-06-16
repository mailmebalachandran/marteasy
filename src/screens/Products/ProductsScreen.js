import React, {Component} from 'react';
import {Card, Text, Image, Avatar, Rating} from 'react-native-elements';
import {SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Header from '../../components/Header/Header';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityContainer';
import Line from '../../components/Line/Line';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductAPI from '../../api/Products/ProductAPI';
import OpeningHour from '../../components/OpeningHour/OpeningHour';

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      productList: [],
      infoMessage: '',
      storeDetail: [],
    };
  }

  componentDidMount = async () => {
    const storeDetail = await ProductAPI.GetStoreBasedonStoreId(2);
    console.log('Mount ' + storeDetail.id);
    this.setState({storeDetail}, () => {
      console.log(this.state.storeDetail.id);
    });
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
            style={{width: '100%', height: 100}}
            PlaceholderContent={<ActivityIndicator isLoading={true} />}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{height: 85}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 0.2}}>
                  <Avatar
                    rounded
                    size="large"
                    containerStyle={{margin: 5}}
                    source={{
                      uri: this.state.storeDetail.gravatar,
                    }}
                  />
                </View>
                <View style={{flex: 0.6, marginLeft: 20}}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
                    {this.state.storeDetail.store_name}
                  </Text>
                  <Text style={{fontSize: 10}}>Description</Text>
                </View>
                <View style={{flex: 0.2, marginTop: 30, marginRight: 20}}>
                  <Rating
                    style={{width: 20, backgroundColor: 'transparent'}} 
                    imageSize={20}
                  />
                  <Text style={{fontSize: 10, marginTop: 10}}>0 reviews</Text>
                </View>
              </View>
            </View>
            <View style={{height: 20}}>
              <Line />
            </View>
            <View style={{height: 50}}>
              {(this.state.storeDetail !== undefined || this.state.storeDetail.id > 0) && (
                 <OpeningHour storeTime={this.state.storeDetail} />
              )}
              {console.log(this.state.storeDetail.id)}
            </View>
            <View style={{height: 20}}>
              <Line />
            </View>
            <View style={{height: '100%'}}>
              <Card title="Category" containerStyle={{height: 200}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{height: 100}}>
                    <Image
                      style={{height: 100, width: 100, borderRadius: 20}}
                      resizeMode="cover"
                      source={{
                        uri:
                          'https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/easy-jeera-rice-recipe-1-500x375-2.jpg',
                      }}
                    />
                  </View>
                  <View>
                    <Text style={{marginLeft: 10}}>Jeera Rice</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 10,
                        flexWrap: 'wrap',
                        width: '50%',
                      }}>
                      Jeera Rice with masala Jeera Rice with masala Jeera Rice
                      with masala
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row', width: '70%'}}>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 12,
                            color: 'red',
                            textDecorationLine: 'line-through',
                          }}>
                          Rs.80
                        </Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 15,
                            color: 'green',
                          }}>
                          Rs.79
                        </Text>
                      </View>
                      <View style={{flex: 0.5}} />
                      <View style={{marginTop: 10}}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="minus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                          <View>
                            <Text style={{margin: 5}}>13</Text>
                          </View>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="plus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card containerStyle={{height: 135}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{height: 100}}>
                    <Image
                      style={{height: 100, width: 100, borderRadius: 20}}
                      resizeMode="cover"
                      source={{
                        uri:
                          'https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/easy-jeera-rice-recipe-1-500x375-2.jpg',
                      }}
                    />
                  </View>
                  <View>
                    <Text style={{marginLeft: 10}}>Jeera Rice</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 10,
                        flexWrap: 'wrap',
                        width: '70%',
                      }}>
                      Jeera Rice with masala Jeera Rice with masala Jeera Rice
                      with masala
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            textDecorationLine: 'line-through',
                          }}>
                          Rs.80
                        </Text>
                        <Text style={{marginLeft: 10, color: 'green'}}>
                          Rs.79
                        </Text>
                      </View>
                      <View style={{flex: 0.5}} />
                      <View style={{marginTop: 10}}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="minus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                          <View>
                            <Text style={{margin: 5}}>13</Text>
                          </View>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="plus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card containerStyle={{height: 135}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{height: 100}}>
                    <Image
                      style={{height: 100, width: 100, borderRadius: 20}}
                      resizeMode="cover"
                      source={{
                        uri:
                          'https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/easy-jeera-rice-recipe-1-500x375-2.jpg',
                      }}
                    />
                  </View>
                  <View>
                    <Text style={{marginLeft: 10}}>Jeera Rice</Text>
                    <Text style={{marginLeft: 10, fontSize: 10}}>
                      Jeera Rice with masala Jeera Rice with masala Jeera Rice
                      with masala
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            textDecorationLine: 'line-through',
                          }}>
                          Rs.80
                        </Text>
                        <Text style={{marginLeft: 10, color: 'green'}}>
                          Rs.79
                        </Text>
                      </View>
                      <View style={{flex: 0.5}} />
                      <View style={{marginTop: 10}}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="minus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                          <View>
                            <Text style={{margin: 5}}>13</Text>
                          </View>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="plus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card containerStyle={{height: 135}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{height: 100}}>
                    <Image
                      style={{height: 100, width: 100, borderRadius: 20}}
                      resizeMode="cover"
                      source={{
                        uri:
                          'https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/easy-jeera-rice-recipe-1-500x375-2.jpg',
                      }}
                    />
                  </View>
                  <View>
                    <Text style={{marginLeft: 10}}>Jeera Rice</Text>
                    <Text style={{marginLeft: 10, fontSize: 10}}>
                      Jeera Rice with masala Jeera Rice with masala Jeera Rice
                      with masala
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            textDecorationLine: 'line-through',
                          }}>
                          Rs.80
                        </Text>
                        <Text style={{marginLeft: 10, color: 'green'}}>
                          Rs.79
                        </Text>
                      </View>
                      <View style={{flex: 0.5}} />
                      <View style={{marginTop: 10}}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="minus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                          <View>
                            <Text style={{margin: 5}}>13</Text>
                          </View>
                          <TouchableOpacity>
                            <View>
                              <Icon
                                name="plus"
                                size={25}
                                style={{marginTop: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ProductsScreen;
