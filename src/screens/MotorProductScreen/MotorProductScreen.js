import React, { Component } from 'react';
import { Text, Avatar, Divider } from 'react-native-elements';
import { View, Image, Dimensions, Picker } from 'react-native';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';
import Header from '../../components/Header/Header';
import * as Images from '../../assets/index';
import * as CommonConstants from '../../constants';
import ErrorOverlay from '../../components/Errors/ErrorOverlay';
import NetInfo from '@react-native-community/netinfo';
import MotorAPI from '../../api/Motor/MotorAPI';
import * as ThemeColor from '../../themes/colors';
import ButtonComponent from '../../components/Button/Button';
import ActivityOverlay from "../../components/ActivityOverlay/ActivityOverlay";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class MotorProductScreen extends Component {
  constructor(props) {
    super(props);
    const params = props.route.params;
    this.state = {
      isLoading: false,
      product: params.product,
      isVariant: params.isVariant,
      infoMessage: '',
      isRunning: false,
      isShowError: false,
      IsInternetConnected: true,
      productVariance: [],
      selectedValue: "Select a Variant",
      price: params.isVariant ? 0 : params.product.regular_price,
      deliverFee: 50,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await this.onPageLoad();
    this.onMotorProductIdOnLoad(this.state.product.id);
  };

  onMotorProductIdOnLoad = async (id) => {
    const result = await MotorAPI.getMotorProductId(id);
    this.setState({ productVariance: result }, () => {
      this.setState({ isLoading: false })
    });
  }

  handleConnectivityChange = isConnected => {
    if (isConnected.isConnected == true) {
      this.setState({ IsInternetConnected: true });
    } else {
      this.setState({ IsInternetConnected: false });
    }
  };

  onPageLoad = async () => {
    NetInfo.addEventListener(this.handleConnectivityChange);
    NetInfo.fetch().done(isConnected => {
      if (isConnected.isConnected == true) {
        this.setState({ IsInternetConnected: true });
      } else {
        this.setState({ IsInternetConnected: false });
      }
    });
  };

  onAvatarImage = item => {
    if (item.images !== undefined) {
      if (
        item.images[0].src !== undefined
      ) {
        return (

          <Avatar
            rounded
            size={90}
            containerStyle={{ marginLeft: "30%" }}
            source={{ uri: item.images[0].src }}
          />
        );
      } else {
        return (
          <Avatar
            rounded
            size="large"
            containerStyle={{ margin: 5 }}
            source={Images.NOSTORE}
          />
        );
      }
    } else {
      return (
        <Avatar
          rounded
          size="large"
          containerStyle={{ margin: 5 }}
          source={Images.NOSTORE}
        />
      );
    }
  };
  renderPickerItems = (productVariance) => {
    let varianceItems = [];
    productVariance.map(p => {
      varianceItems.push(
        <Picker.Item key={p.id} label={p.attributes[0].option} value={p.id} />
      )
    })
    return varianceItems;
  }

  renderTotal = () => {
    let total = parseFloat(this.state.price) + parseFloat(this.state.deliverFee);
    return total;
  }

  render() {
    const isVariant = this.state.isVariant;
    return (
      <>
        {!this.state.IsInternetConnected ? (
          <ErrorOverlay errorType={'NetWork'} />
        ) : this.state.isShowError ? (
          <ErrorOverlay errorType={'API'} reload={this.componentDidMount} />
        ) : (
              <>
                {this.state.isLoading && <ActivityOverlay />}
                <View style={{ flex: 1, backgroundColor: "white" }}>
                  <StatusBarComponent styleType={0} />
                  <Header
                    navigationScreenValue="Motor Products"
                    navigation={this.props.navigation}
                    navigateValue="MotorScreen"
                  />
                  <View style={{ flex: 0.2, }}>
                    <View style={{ flex: 1, }}>
                      <View style={{ height: "64%", borderRadius: 10, flexDirection: 'row', marginTop: "10%" }}>
                        <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center", }}>
                          <View>{this.onAvatarImage(this.state.product)}</View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                          <Text style={{ fontSize: 22, textTransform: "capitalize", marginLeft: "25%" }}>{this.state.product.name}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 1, backgroundColor: "white", marginTop: "10%" }}>
                    {isVariant &&
                      <View style={{ flex: 0.2, backgroundColor: "white" }}>
                        <View style={{ borderColor: ThemeColor.DarkColor, borderWidth: 1, height: 50, width: "90%", borderRadius: 25, marginLeft: "5%", marginRight: "5%" }}>
                          <Picker
                            selectedValue={this.state.selectedValue}
                            mode={"dropdown"}
                            style={{ height: 50, width: "90%", color: ThemeColor.DarkColor, borderRadius: 25, marginLeft: "5%", marginRight: "5%", }}
                            onValueChange={(itemValue, itemIndex) => {
                              console.log("value, index", itemValue, itemIndex);
                              this.setState({
                                selectedValue: itemValue,
                                price: parseFloat(this.state.productVariance[itemIndex].regular_price),
                                productType: this.state.productVariance[itemIndex].attributes[0].option,
                              })
                            }}>
                            {this.renderPickerItems(this.state.productVariance)}
                          </Picker>
                        </View>
                      </View>}
                    <View
                      style={{
                        backgroundColor: ThemeColor.DarkTextColor,
                        paddingTop: 15,
                        paddingLeft: 10,
                        paddingRight: 10,
                        flex: 1,
                      }}>
                      <View style={{ height: 40 }}>
                        <Text>PRICE DETAILS</Text>
                      </View>
                      <Divider />
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                          <View style={{flex: 1,flexDirection: "row"}}>
                          <MaterialIcons style={{marginTop: "5%"}} name={'library-books'} color={ThemeColor.DarkColor} size={17} />
                          {isVariant &&
                            <Text style={{ margin: 10 }}>
                              Item Type
                            </Text>}
                          </View>
                          <View style={{flex: 1, flexDirection: "row"}}>
                          <MaterialIcons style={{marginTop: "5%"}}name={'monetization-on'} color={ThemeColor.DarkColor} size={17} />
                          <Text style={{ margin: 10 }}>
                              Price
                            </Text>
                          </View>
                          <View style={{flex: 1, flexDirection: "row"}}>
                          <FontAwesome style={{marginTop: "5%"}} name={'truck'} color={ThemeColor.DarkColor} size={17} />
                          <Text style={{ margin: 10 }}>
                            Delivery Fee</Text>
                          </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end" }}>
                          {isVariant &&
                            <Text style={{ margin: 10 }}>{this.state.productType}</Text>}
                          <Text style={{ margin: 10 }}>
                            Rs. {this.state.price}
                          </Text>
                          <Text style={{ margin: 10 }}>
                            Rs. {this.state.deliverFee.toString()}
                          </Text>
                        </View>
                      </View>
                      <Divider />
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                          <Text style={{ margin: 10, fontWeight: 'bold' }}>
                            Total
                            </Text>
                        </View>
                        <View>
                          <Text style={{ margin: 10, fontWeight: 'bold' }}>
                            Rs. {this.renderTotal()}
                          </Text>
                        </View>
                      </View>
                      <Divider style={{ marginBottom: 15 }} />
                    </View>
                    <View>
                      <ButtonComponent
                        titleValue="Book Now"
                        onPressHandler={() => this.onSubmitHandler()}
                      />
                    </View>
                  </View>
                </View>
              </>
            )}
      </>
    );
  }
}

export default MotorProductScreen;
