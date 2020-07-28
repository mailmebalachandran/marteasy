import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import unescape from "unescape";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <View style={{flex: 1}}><Text style={[styles.title, styles.font]}>{unescape(this.props.title)}</Text></View>
                <AntDesign name={this.state.expanded ? 'minus' : 'plus'} size={20} color={"darkgray"} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text style={{color: "#4a4a4a"}}>{this.props.data}</Text>    
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "#4a4a4a",
        fontWeight: "normal",
        marginLeft: "3%"
    },
    row:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        width: "100%",
        height:56,
        paddingRight:18,
        alignItems:'center',
    },
    parentHr:{
        height:1,
        color: "white",
        width:'100%'
    },
    child:{
        padding:16,
        marginLeft: "10%"
    }
    
});