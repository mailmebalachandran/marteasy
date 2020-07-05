import React, {Component} from 'react';
import {View, FlatList, Text, ScrollView, Image} from 'react-native';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';
import Header from '../../components/Header/Header';
import ErrorOverlay from '../../components/Errors/ErrorOverlay';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Images from '../../assets/index';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      IsInternetConnected: true,
    };
  }
  render() {
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];
    return (
      <>
        {!this.state.IsInternetConnected ? (
          <ErrorOverlay errorType={'NetWork'} />
        ) : this.state.isLoading ? (
          <MenuLoader />
        ) : this.state.isShowError ? (
          <ErrorOverlay errorType={'API'} reload={this.componentDidMount} />
        ) : (
          <>
            <View style={{flex: 1, backgroundColor: '#d4d4d4'}}>
              <StatusBarComponent styleType={0} />
              <Header
                navigationScreenValue="Category Name"
                navigation={this.props.navigation}
              />
              <View>
                <FlatList
                  horizontal={true}
                  data={DATA}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <TouchableOpacity>
                      <View
                        style={{
                          padding: 20,
                          backgroundColor: 'white',
                          margin: 10,
                        }}>
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
              <ScrollView>
                <View style={{height: '100%'}}>
                  <View
                    style={{
                      height: 125,
                      margin: 10,
                      padding: 10,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      borderWidth: 1,
                      borderColor: 'white',
                      borderStyle: 'solid',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{height: 100}}>
                        <Image
                          style={{height: 100, width: 100}}
                          resizeMode="cover"
                          source={Images.NODISH}
                        />
                      </View>
                      <View>
                        <Text style={{marginLeft: 10}}>Product Name</Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 10,
                            flexWrap: 'wrap',
                            width: '100%',
                          }}>
                          Product Description
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '50%'}}>
                            <Text
                              style={{
                                marginLeft: 10,
                                textDecorationLine: 'line-through',
                                fontSize: 12,
                                color: 'red',
                              }}>
                              Rs.100
                            </Text>
                            <Text
                              style={{
                                marginLeft: 10,
                                color: 'green',
                                fontSize: 15,
                              }}>
                              Rs.200
                            </Text>
                          </View>
                          <View style={styles.addCartOuterViewContainerStyle}>
                            <View style={styles.imageViewContainerStyle}>
                              <>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.minusViewStyle}>
                                      <Icon
                                        name="minus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                                <View style={styles.textViewStyle}>
                                  <Text style={styles.textTextStyle}>
                                    0
                                  </Text>
                                </View>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.plusViewStyle}>
                                      <Icon
                                        name="plus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 125,
                      margin: 10,
                      padding: 10,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      borderWidth: 1,
                      borderColor: 'white',
                      borderStyle: 'solid',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{height: 100}}>
                        <Image
                          style={{height: 100, width: 100}}
                          resizeMode="cover"
                          source={Images.NODISH}
                        />
                      </View>
                      <View>
                        <Text style={{marginLeft: 10}}>Product Name</Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 10,
                            flexWrap: 'wrap',
                            width: '100%',
                          }}>
                          Product Description
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '50%'}}>
                            <Text
                              style={{
                                marginLeft: 10,
                                textDecorationLine: 'line-through',
                                fontSize: 12,
                                color: 'red',
                              }}>
                              Rs.100
                            </Text>
                            <Text
                              style={{
                                marginLeft: 10,
                                color: 'green',
                                fontSize: 15,
                              }}>
                              Rs.200
                            </Text>
                          </View>
                          <View style={styles.addCartOuterViewContainerStyle}>
                            <View style={styles.imageViewContainerStyle}>
                              <>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.minusViewStyle}>
                                      <Icon
                                        name="minus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                                <View style={styles.textViewStyle}>
                                  <Text style={styles.textTextStyle}>
                                    0
                                  </Text>
                                </View>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.plusViewStyle}>
                                      <Icon
                                        name="plus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 125,
                      margin: 10,
                      padding: 10,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      borderWidth: 1,
                      borderColor: 'white',
                      borderStyle: 'solid',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{height: 100}}>
                        <Image
                          style={{height: 100, width: 100}}
                          resizeMode="cover"
                          source={Images.NODISH}
                        />
                      </View>
                      <View>
                        <Text style={{marginLeft: 10}}>Product Name</Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 10,
                            flexWrap: 'wrap',
                            width: '100%',
                          }}>
                          Product Description
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '50%'}}>
                            <Text
                              style={{
                                marginLeft: 10,
                                textDecorationLine: 'line-through',
                                fontSize: 12,
                                color: 'red',
                              }}>
                              Rs.100
                            </Text>
                            <Text
                              style={{
                                marginLeft: 10,
                                color: 'green',
                                fontSize: 15,
                              }}>
                              Rs.200
                            </Text>
                          </View>
                          <View style={styles.addCartOuterViewContainerStyle}>
                            <View style={styles.imageViewContainerStyle}>
                              <>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.minusViewStyle}>
                                      <Icon
                                        name="minus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                                <View style={styles.textViewStyle}>
                                  <Text style={styles.textTextStyle}>
                                    0
                                  </Text>
                                </View>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.plusViewStyle}>
                                      <Icon
                                        name="plus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 125,
                      margin: 10,
                      padding: 10,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      borderWidth: 1,
                      borderColor: 'white',
                      borderStyle: 'solid',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{height: 100}}>
                        <Image
                          style={{height: 100, width: 100}}
                          resizeMode="cover"
                          source={Images.NODISH}
                        />
                      </View>
                      <View>
                        <Text style={{marginLeft: 10}}>Product Name</Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 10,
                            flexWrap: 'wrap',
                            width: '100%',
                          }}>
                          Product Description
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '50%'}}>
                            <Text
                              style={{
                                marginLeft: 10,
                                textDecorationLine: 'line-through',
                                fontSize: 12,
                                color: 'red',
                              }}>
                              Rs.100
                            </Text>
                            <Text
                              style={{
                                marginLeft: 10,
                                color: 'green',
                                fontSize: 15,
                              }}>
                              Rs.200
                            </Text>
                          </View>
                          <View style={styles.addCartOuterViewContainerStyle}>
                            <View style={styles.imageViewContainerStyle}>
                              <>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.minusViewStyle}>
                                      <Icon
                                        name="minus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                                <View style={styles.textViewStyle}>
                                  <Text style={styles.textTextStyle}>
                                    0
                                  </Text>
                                </View>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.plusViewStyle}>
                                      <Icon
                                        name="plus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 125,
                      margin: 10,
                      padding: 10,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      borderWidth: 1,
                      borderColor: 'white',
                      borderStyle: 'solid',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{height: 100}}>
                        <Image
                          style={{height: 100, width: 100}}
                          resizeMode="cover"
                          source={Images.NODISH}
                        />
                      </View>
                      <View>
                        <Text style={{marginLeft: 10}}>Product Name</Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 10,
                            flexWrap: 'wrap',
                            width: '100%',
                          }}>
                          Product Description
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '50%'}}>
                            <Text
                              style={{
                                marginLeft: 10,
                                textDecorationLine: 'line-through',
                                fontSize: 12,
                                color: 'red',
                              }}>
                              Rs.100
                            </Text>
                            <Text
                              style={{
                                marginLeft: 10,
                                color: 'green',
                                fontSize: 15,
                              }}>
                              Rs.200
                            </Text>
                          </View>
                          <View style={styles.addCartOuterViewContainerStyle}>
                            <View style={styles.imageViewContainerStyle}>
                              <>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.minusViewStyle}>
                                      <Icon
                                        name="minus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                                <View style={styles.textViewStyle}>
                                  <Text style={styles.textTextStyle}>
                                    0
                                  </Text>
                                </View>
                                <View>
                                  <TouchableOpacity>
                                    <View style={styles.plusViewStyle}>
                                      <Icon
                                        name="plus"
                                        size={15}
                                        style={{marginTop: 5}}
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </>
    );
  }
}

export default SubCategoryScreen;
