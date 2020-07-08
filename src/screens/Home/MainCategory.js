import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements';
import * as ThemeColor from '../../themes/colors';
import * as Images from '../../assets/index';
import * as CommonConstants from '../../constants';
import * as catImages from "../../assets/index";
import unescape from "unescape";
class MainCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    category_name: "Fruits & Vegetables",
                    gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_1487_v_3_500_1580063978.jpg"
                },
                {
                    category_name: "Groceries",
                    gravatar: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=435,h=420/app/images/category/cms_images/icon/icon_cat_1616_v_3_500_1592303534.jpg"
                }
            ],
        }
    }
    onAvatarImage = item => {
        if (item.gravatar !== undefined) {
            if (item.gravatar.includes(CommonConstants.NOSTOREDEFAULT_TEXT_TO_SEARCH)) {
                return (
                    <Image
                        source={Images.NOSTORE}
                        style={{
                            resizeMode: 'contain',
                            height: 100,
                            width: '100%',
                            shadowColor: 'black',
                            shadowOffset: { height: 2 },
                            shadowOpacity: 0.3,
                        }}
                    />
                );
            } else {
                return (
                    <Image
                        source={{ uri: item.gravatar }}
                        style={{
                            resizeMode: 'contain',
                            height: 100,
                            width: '100%',
                        }}
                    />
                );
            }
        } else {
            return (
                <Image
                    source={Images.NOSTORE}
                    style={{
                        resizeMode: 'contain',
                        height: 100,
                        width: '80%',
                        shadowColor: 'black',
                        shadowOffset: { height: 2 },
                        shadowOpacity: 0.3,
                    }}
                />
            );
        }
    };

    render() {

        return (
            <View style={styles.mainCategoryContainer}>
                {/* Main Category 2 column */}
                {this.props.categories.map(cat => {
                    return (
                        <View style={[styles.categoryItemContainer2Col, styles.mainCategory]}>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log(cat.id);
                                    this.props.navigation.navigate('SubCategoryScreen', {
                                    catId: cat.id,
                                    catName: cat.name
                                  });
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'transparent',
                                        width: '100%',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 3 },
                                        shadowOpacity: 0.5,
                                        shadowRadius: 5,
                                        elevation: 25,
                                    }}>
                                    <Image
                                        source={{ uri: cat.image.src }}
                                        style={{
                                            resizeMode: 'contain',
                                            height: 100,
                                            width: '100%',
                                        }}
                                    />
                                </View>
                                <Text
                                    style={styles.categoryName}>
                                    {unescape(cat.name)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        )
    }
}
export default MainCategory;
