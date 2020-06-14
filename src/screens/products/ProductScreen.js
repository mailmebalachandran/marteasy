import React, { Component } from 'react';
import axios from "axios"
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { LOGO } from "../../assets"
import ProductAPI from '../../api/Products/ProductAPI';
class ProductScreen extends Component {
    state = {
        productList: [],
        message: "",
    };
    componentDidMount = async () => {
        const productList = await ProductAPI("2");
        this.setState({ productList });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBarComponent styleType={0} />
                <FlatList
                    data={this.state.productList}
                    renderItem={({ item }) => (
                        <Card
                            style={styles.cardContainer}
                        >
                            {/* <View style={styles.imageView}>
                                <Image
                                    style={styles.imageStyles}
                                    resizeMode="cover"
                                    source={{ uri: item.images[0].src }}
                                />
                            </View>
                            <View style={styles.detailsView}>
                                <Text>
                                    {item.short_description}
                                </Text>
                            </View> */}
                            <ListItem
                                key={item.id}
                                leftAvatar={{ source: { uri: item.images[0].src } }}
                                title={item.name}
                                subtitle={item.short_description}
                            />
                        </Card>

                    )
                    }
                    keyExtractor={product => product.id}
                />

            </SafeAreaView >
        );
    }
}

export default ProductScreen;
