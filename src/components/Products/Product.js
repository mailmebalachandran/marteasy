import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getItemTransformedItemDesc } from "./utils"

class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    renderProductImage = ({ src }) => {
        return (
            <View style={{ height: 100 }}>
                <Image
                    style={{ height: 100, width: 100, borderRadius: 20 }}
                    resizeMode="cover"
                    source={{ uri: src }}
                />
            </View>
        )
    }
    render() {
        const { productList } = this.props;
        console.log("len",productList.length)
        return (
            <View>
                {productList.map((product) => (
                    <View style={{ height: '100%' }}>
                        <Card containerStyle={{ height: 135 }}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                }}>
                                {this.renderProductImage(product.images[0])}
                                <View>
                                    <Text style={{ marginLeft: 10 }}>{product.name}</Text>
                                    <Text
                                        style={{
                                            marginLeft: 10,
                                            fontSize: 10,
                                            flexWrap: 'wrap',
                                            width: '100%',
                                        }}>
                                        {getItemTransformedItemDesc(product.short_description)}
                                    </Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View>
                                            <Text
                                                style={{
                                                    marginLeft: 10,
                                                    textDecorationLine: 'line-through',
                                                }}>
                                                Rs.{product.regular_price}
                                            </Text>
                                            <Text style={{ marginLeft: 10, color: 'green' }}>
                                                Rs.{product.sale_price}
                                            </Text>
                                        </View>
                                        <View style={{ flex: 0.5 }} />
                                        <View style={{ marginTop: 10 }}>
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
                                                            style={{ marginTop: 5 }}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                                <View>
                                                    <Text style={{ margin: 5 }}>5</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <View>
                                                        <Icon
                                                            name="plus"
                                                            size={25}
                                                            style={{ marginTop: 5 }}
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
                )
                )
                }
            </View>
        )
    }
}
export default Product;