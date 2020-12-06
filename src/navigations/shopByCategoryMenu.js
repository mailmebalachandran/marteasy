import React, { Component } from "react";
import { View, Text, LayoutAnimation, Platform, UIManager } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import Accordian from '../components/Accordian/accordian';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
class ShopByCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewSection: false,
            viewShop: '',
            pressIn: false,
            isExpanded: this.setInitialMenuExpandState(this.props.categoryList),
            currentExpandedMenuId: 0,
            isAlreadyExpanded: false,
        }
    }

    componentDidMount = async () => {
    }

    setInitialMenuExpandState = (catList) => {
        let expandState = [];
        catList.map(cat => {
            let tempObj = {
                id: cat.id,
                isExpand: false,
            };
            expandState.push(tempObj);
        })
        return expandState;
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

    renderAccordians = () => {
        const items = [];
        let item;
        const categoryList = this.props.categoryList
        for (item of categoryList) {
            items.push(
                <Accordian
                    title={item.name}
                    subCatList={this.props.subCatList}
                    parentId={item.id}
                    isExpanded={this.state.isExpanded}
                    setCurrentExpandedMenu={(parentId) => this.setCurrentExpandedMenuId(parentId)}
                    navigation={this.props.navigation}
                />
            );
        }
        return items;
    }
    setCurrentExpandedMenuId = (parentId) => {
        let tempArr = [...this.state.isExpanded];
        tempArr.map(exp => {
            if(exp.id === parentId) {
                if(exp.isExpand === true) {
                    exp.isExpand = false;
                } else {
                    exp.isExpand = true;
                }
            } else {
                exp.isExpand = false;
            }
        });
        this.setState({isExpanded: tempArr});
    }

    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                {<View style={{ flex: 1, flexDirection: "row", backgroundColor: "#4a4a4a" }}>
                    <DrawerItem
                        style={{ backgroundColor: "#4a4a4a", width: "100%", }}
                        icon={() => (<FontAwesome5 name={'arrow-left'} size={20} color={"white"} />)}
                        label="Shop By Category"
                        onPress={() => this.props.onPress(false)}
                        inactiveTintColor={"white"} />
                </View>}
                <View style={{
                    flex: 1, flexDirection: "column",
                }}>
                    {this.renderAccordians()}
                </View>
            </DrawerContentScrollView>
        )
    }
}

export default ShopByCategory;