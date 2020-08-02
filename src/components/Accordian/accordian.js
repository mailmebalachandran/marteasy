import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import unescape from "unescape";

export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
            subMenu: [],
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    toggleExpand = (parentId) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        //Set Expand State in Parent
        this.props.setCurrentExpandedMenu(parentId);

        this.props.subCatList.map(subCat => {
            if (subCat.parentId === parentId) {
                this.setState({
                    subMenu: subCat.subCats
                });
            }
        })
    }
    checkIsExpanded = (parentId) => {
        let status = undefined;
        this.props.isExpanded.map(exp => {
            if (exp.id === parentId) {
                if (exp.isExpand === true) {
                    status = true;
                } else {
                    status = false;
                }
            }
        })
        return status;
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    ref={this.accordian}
                    style={styles.row}
                    onPress={() => this.toggleExpand(this.props.parentId)}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.title, styles.font]}>{unescape(this.props.title)}</Text>
                    </View>
                    <AntDesign
                        name={this.checkIsExpanded(this.props.parentId) ? 'minus' : 'plus'}
                        size={20} color={"darkgray"}
                    />
                </TouchableOpacity>
                <View style={styles.parentHr} />
                {this.checkIsExpanded(this.props.parentId) &&
                    this.state.subMenu && this.state.subMenu.map(subCatList => {
                        return (
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('DrawerProductScreen', {
                                    subId: subCatList.id,
                                    subName: subCatList.name
                                })
                                console.log("SubId", subCatList.id)
                            }
                            }>
                                <View style={styles.child}>
                                    <Text style={{ color: "#4a4a4a" }}>{unescape(subCatList.name)}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#4a4a4a",
        fontWeight: "normal",
        marginLeft: "3%"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: "100%",
        height: 56,
        paddingRight: 18,
        alignItems: 'center',
    },
    parentHr: {
        height: 1,
        color: "white",
        width: '100%'
    },
    child: {
        padding: 16,
        marginLeft: "10%"
    }

});