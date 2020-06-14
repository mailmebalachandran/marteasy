import React, {Component} from 'react';
import {View, Image, FlatList, SafeAreaView, Text } from 'react-native';
import Label from '../../components/Label/Label';
import ShopCardView from '../../components/ShopCardView/ShopCardView';
import styles from './styles';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import { Card } from 'react-native-elements';
import * as ThemeColor from '../../themes/colors';
// import LoginAPI from '../../api/Login/ShopAPI';

class DashboardShopView extends Component {

    state = {
        ShopList:[
            {
              "id": 2,
              "store_name": "singhotel",
              "first_name": "saravana",
              "last_name": "kumar",
              "social": {
                "fb": "",
                "gplus": "",
                "twitter": "",
                "pinterest": "",
                "linkedin": "",
                "youtube": "",
                "instagram": "",
                "flickr": ""
              },
              "show_email": false,
              "location": "",
              "banner": "https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/cropped-banner_13-3.jpg",
              "banner_id": 1581,
              "gravatar": "https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/cropped-unnamed-1-2.jpg",
              "gravatar_id": 1583,
              "shop_url": "https://marteasy.vasanthamveliyeetagam.com/store/singhotel/",
              "products_per_page": 100,
              "show_more_product_tab": true,
              "toc_enabled": false,
              "store_toc": "",
              "featured": false,
              "rating": {
                "rating": "0.00",
                "count": 0
              },
              "enabled": true,
              "registered": "2020-06-08 11:57:30",
              "payment": "******",
              "trusted": false,
              "store_open_close": {
                "enabled": true,
                "time": {
                  "sunday": {
                    "status": "open",
                    "opening_time": "7:00 am",
                    "closing_time": ""
                  },
                  "monday": {
                    "status": "open",
                    "opening_time": "7:00 am",
                    "closing_time": ""
                  },
                  "tuesday": {
                    "status": "open",
                    "opening_time": "7:00 am",
                    "closing_time": ""
                  },
                  "wednesday": {
                    "status": "open",
                    "opening_time": "7:00 am",
                    "closing_time": ""
                  },
                  "thursday": {
                    "status": "open",
                    "opening_time": "7:00 am",
                    "closing_time": ""
                  },
                  "friday": {
                    "status": "open",
                    "opening_time": "7:00 am",
                    "closing_time": ""
                  },
                  "saturday": {
                    "status": "open",
                    "opening_time": "7:00 am",
                    "closing_time": ""
                  }
                },
                "open_notice": "open",
                "close_notice": "Store is closed"
              },
              "_links": {
                "self": [
                  {
                    "href": "https://marteasy.vasanthamveliyeetagam.com/wp-json/dokan/v1/stores/2"
                  }
                ],
                "collection": [
                  {
                    "href": "https://marteasy.vasanthamveliyeetagam.com/wp-json/dokan/v1/stores"
                  }
                ]
              }
            },
            {
              "id": 3,
              "store_name": "Freggie mart",
              "first_name": "Freggie",
              "last_name": "mart",
              "social": {
                "fb": "",
                "gplus": "",
                "twitter": "",
                "pinterest": "",
                "linkedin": "",
                "youtube": "",
                "instagram": "",
                "flickr": ""
              },
              "show_email": false,
              "location": "",
              "banner": "https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/banner_13-2.jpg",
              "banner_id": 1550,
              "gravatar": "https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/cropped-preview.jpg",
              "gravatar_id": 1590,
              "shop_url": "https://marteasy.vasanthamveliyeetagam.com/store/freggie-mart/",
              "products_per_page": 100,
              "show_more_product_tab": true,
              "toc_enabled": false,
              "store_toc": "",
              "featured": false,
              "rating": {
                "rating": "0.00",
                "count": 0
              },
              "enabled": true,
              "registered": "2020-06-08 12:17:44",
              "payment": "******",
              "trusted": false,
              "store_open_close": {
                "enabled": true,
                "time": {
                  "sunday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  },
                  "monday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  },
                  "tuesday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  },
                  "wednesday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  },
                  "thursday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  },
                  "friday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  },
                  "saturday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  }
                },
                "open_notice": "Store is open",
                "close_notice": "Store is closed"
              },
              "_links": {
                "self": [
                  {
                    "href": "https://marteasy.vasanthamveliyeetagam.com/wp-json/dokan/v1/stores/3"
                  }
                ],
                "collection": [
                  {
                    "href": "https://marteasy.vasanthamveliyeetagam.com/wp-json/dokan/v1/stores"
                  }
                ]
              }
            },
            {
              "id": 4,
              "store_name": "ICY SPICY",
              "first_name": "ICY",
              "last_name": "SPICY",
              "social": {
                "fb": "",
                "gplus": "",
                "twitter": "",
                "pinterest": "",
                "linkedin": "",
                "youtube": "",
                "instagram": "",
                "flickr": ""
              },
              "show_email": false,
              "location": "",
              "banner": "https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/cropped-fresh-food-groceries-tray-box-wood-tabletop-banner-background_8087-2719.jpg",
              "banner_id": 1557,
              "gravatar": "https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/cropped-unnamed-1.jpg",
              "gravatar_id": 1556,
              "shop_url": "https://marteasy.vasanthamveliyeetagam.com/store/icy-spicy/",
              "products_per_page": 100,
              "show_more_product_tab": true,
              "toc_enabled": false,
              "store_toc": "",
              "featured": false,
              "rating": {
                "rating": "0.00",
                "count": 0
              },
              "enabled": true,
              "registered": "2020-06-08 12:45:06",
              "payment": "******",
              "trusted": false,
              "store_open_close": {
                "enabled": true,
                "time": {
                  "sunday": {
                    "status": "close",
                    "opening_time": "",
                    "closing_time": ""
                  },
                  "monday": {
                    "status": "open",
                    "opening_time": "5:00 am",
                    "closing_time": "11:30 pm"
                  },
                  "tuesday": {
                    "status": "open",
                    "opening_time": "5:00 am",
                    "closing_time": "11:30 pm"
                  },
                  "wednesday": {
                    "status": "open",
                    "opening_time": "5:00 am",
                    "closing_time": "11:30 pm"
                  },
                  "thursday": {
                    "status": "open",
                    "opening_time": "5:00 am",
                    "closing_time": "11:30 pm"
                  },
                  "friday": {
                    "status": "open",
                    "opening_time": "5:00 am",
                    "closing_time": "11:30 pm"
                  },
                  "saturday": {
                    "status": "open",
                    "opening_time": "5:00 am",
                    "closing_time": "11:30 pm"
                  }
                },
                "open_notice": "Store is open",
                "close_notice": "Store is closed"
              },
              "_links": {
                "self": [
                  {
                    "href": "https://marteasy.vasanthamveliyeetagam.com/wp-json/dokan/v1/stores/4"
                  }
                ],
                "collection": [
                  {
                    "href": "https://marteasy.vasanthamveliyeetagam.com/wp-json/dokan/v1/stores"
                  }
                ]
              }
            }
          ]
      };

    render() {
        return (
          <SafeAreaView style={styles.containerStyle} >
           <FlatList style={{flex:1}} 
           columnWrapperStyle={styles.row}
            data={ this.state.ShopList }
            renderItem={ ({item}) =>
            <Card containerStyle={{flex:0.5}}>
                <View>
               <Image source={{uri:item.gravatar}} style={{
            resizeMode: "contain",
            height: 100,
            width: '100%'
          }} />
          </View>
               <Text style={{textAlign:'center', color:ThemeColor.DarkColor, fontWeight:"bold" }}> {item.store_name} </Text>
               
          </Card>
           }
            numColumns={2}
         />
          </SafeAreaView>
        );
      }
    }
    
    export default DashboardShopView;
    

