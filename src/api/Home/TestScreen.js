import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
} from 'react-native';
import products from "./data.json"
class TestScreen extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.transformToStoreData();
    }
    transformToStoreData = () => {
        let storeIds = [];
        let storeData = [];
        products.map(pro => {
            if (!storeIds.includes(pro.store.id)) {
                storeIds.push(pro.store.id);
                storeData.push({
                    id: pro.store.id,
                    name: pro.store.name,
                });
            }
        })
    }
    render() {
        return (
            <View>
                <Text>Test Screen</Text>
            </View>
        )
    }
}
export default TestScreen;
