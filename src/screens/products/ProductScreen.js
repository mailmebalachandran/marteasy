import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import { Card, ListItem, Text, PricingCard } from 'react-native-elements';
import ProductAPI from '../../api/Products/ProductAPI';
import Header from '../../components/Header/Header';
import { getItemTransformedItemDesc } from "./utils";
import ActivityContainer from "../../components/ActivityIndicator/ActivityContainer";
import * as ThemeColor from "../../themes/colors";
import { NO_PRODUCTS } from "./constants";

class ProductScreen extends Component {
    state = {
        productList: [],
        message: "",
        isLoading: false,
        infoMessage: NO_PRODUCTS
    };
    componentDidMount = async () => {
        this.setState({
            isLoading: true,
            productList: [],
            infoMessage: ""
        })
        const productList = await ProductAPI(this.props.route.params.storeId);
        this.setState({ productList }, () => {
            this.state.productList.length === 0 &&
                this.setState({ infoMessage: NO_PRODUCTS })
            this.setState({ isLoading: false });
        });
    }
    componentDidUpdate = async (prevProps) => {
        if (this.props.route.params.storeId !== prevProps.route.params.storeId) {
            this.setState({
                isLoading: true,
                productList: [],
                infoMessage: ""
            })
            const productList = await ProductAPI(this.props.route.params.storeId);
            this.setState({ productList }, () => {
                this.state.productList.length === 0 &&
                    this.setState({ infoMessage: NO_PRODUCTS })
                this.setState({ isLoading: false });
            });
        }
    }
    componentWillUnmount() {
        this.setState({ infoMessage: "" })
    }
    renderRating = (rating) => {
        return ""
    }
    render() {
        const { storeName, storeOpen } = this.props.route.params
        return (
            <SafeAreaView style={styles.container}>
                <StatusBarComponent styleType={0} />
                <Header navigation={this.props.navigation} titleValue={storeName} />
                <ActivityContainer isLoading={this.state.isLoading} />
                {this.state.productList.length === 0 ?
                    <Text h3>{this.state.infoMessage}</Text> :
                    <FlatList
                        data={this.state.productList}
                        renderItem={({ item }) => (
                            <Card
                                containerStyle={styles.cardContainer}
                                title={item.name.toUpperCase()}
                                key={item.id}
                                titleStyle={styles.cardTitle}
                                wrapperStyle={styles.cardContentContainer}
                            >
                                <ListItem
                                    key={item.id}
                                    leftAvatar={{
                                        source: { uri: item.images[0].src },
                                        style: styles.productImage
                                    }}
                                    subtitle={<PricingCard
                                        containerStyle={styles.pricingContainer}
                                        titleStyle={styles.pricingTitle}
                                        price={"Rs." + item.price}
                                        pricingStyle={styles.priceText}
                                        info={[
                                            getItemTransformedItemDesc(item.short_description)
                                        ]}
                                        infoStyle={styles.description}
                                        button={{ title: 'ADD', icon: 'shopping-cart' }}
                                        color={ThemeColor.DarkColor}
                                    />
                                    }
                                />
                            </Card>

                        )
                        }
                        keyExtractor={item => item.id}
                    />
                }
            </SafeAreaView >
        );
    }
}

export default ProductScreen;
