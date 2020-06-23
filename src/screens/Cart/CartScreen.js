import React, {Component} from 'react';
import {View, Image, ActivityIndicator, Text, AsyncStorage} from 'react-native';
import TextBox from '../../components/TextBox/TextBox';
import Label from '../../components/Label/Label';
import styles from './styles';
import ButtonComponent from '../../components/Button/Button';
import Toast, {DURATION} from 'react-native-easy-toast';


class CartScreen extends Component {  
  constructor(props){
    super(props);
    this.state = {
      IsLoaded: false
    };
    
  }

  getDataToStorage = async () => {
    try {
      let value = await AsyncStorage.getItem('Cart');
      return JSON.stringify(value);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () =>{
    let value = await AsyncStorage.getItem('Cart');
    console.log( JSON.stringify(value));
    console.log(JSON.parse(JSON.stringify(value)));
  }

  onSubmitHandler = async () => {
    
  };

  render() {
    return (
        <View style={{flexDirection:"column", flex:1}} >
          <View>
            <View style={styles.containerStyle} style={{flexDirection:'row', padding:10}}>
          
                <Image
                    source={{ uri: 'https://marteasy.vasanthamveliyeetagam.com/wp-content/uploads/2020/06/cropped-unnamed-1-2.jpg' }}
                    style={{
                    resizeMode: 'contain',
                    height: 65,
                    width: 65,
                }}/>
                <View style={{paddingLeft:17, alignItems:"center", marginTop:20 }} >
                    <Text style={{ fontWeight:"bold" }}>Company1</Text>
                </View>
            </View>
            <View style={{backgroundColor:"#D6D5D5", height:2, marginLeft:10, marginRight:10}} >
            </View>    
            <View style={{padding:20}}>
            <View style={styles.containerStyle} style={{flexDirection:'row', padding:10}} >
                <Text style={{flex:0.6}}>Item 1</Text>
                <View style={{flex:0.2}} ></View>
                <Text style={{flex:0.2, textAlign:"right"}}>Rs 1000</Text>
            </View>
            <View style={styles.containerStyle} style={{flexDirection:'row', padding:10}} >
                <Text style={{flex:0.6}}>Item 2</Text>
                <View style={{flex:0.2}} ></View>
                <Text style={{flex:0.2, textAlign:"right"}}>Rs 1000</Text>
            </View>
            <View style={styles.containerStyle} style={{flexDirection:'row', padding:10}} >
                <Text style={{flex:0.6}}>Item 3</Text>
                <View style={{flex:0.2}} ></View>
                <Text style={{flex:0.2, textAlign:"right"}}>Rs 1000</Text>
            </View>
            </View>
            <View style={{backgroundColor:"#D6D5D5", height:2, marginLeft:10, marginRight:10}} >
            </View>
            {/* <View style={styles.containerStyle} style={{flexDirection:'row'}}>
            <Image
                    source={Coupon}
                    style={{flex:0.1,
                    resizeMode: 'contain',
                    height: 40,
                    width: 40,
                }}/>
            <Text style={{marginTop:10,fontWeight:"bold",flex:0.7, textAlign:"center"}} >APPLY COUPON</Text>
            <Text style={{marginTop:10,fontWeight:"bold",flex:0.1, textAlign:"right"}} >></Text>
            
            </View>
            <View style={{backgroundColor:"#D6D5D5", height:2, marginLeft:10, marginRight:10}} >
            </View> */}
            <View style={{flexDirection:'row', paddingTop:20}}>
<View style={{flex:0.8}} >
            <Label labelValue="Apply Coupon" />
        <TextBox
          placeHolderValue="Coupon Code"
          
          IsHavingIcon={true}
          iconName="gift"
          iconSize={25}
          iconColor="#087f23"
          secureText={false}
          textStyle={{fontSize: 10}}
          onChangedTextHandler={text => {
           
          }}
        />
        </View>
        <View style={{flex:0.2, alignContent:"center", alignItems:"center",paddingTop:15}} >
        <ButtonComponent style={{paddingTop:10}}
          titleValue="Apply"
          
        />
        </View>
        </View>

<View style={{backgroundColor:"#D6D5D5", height:2, marginLeft:10, marginRight:10}} >
            </View>
<View style={{padding:10}}>
  <Text style={{fontWeight:"bold"}} >Bill Details</Text>
  <View style={{flexDirection:"row", paddingTop:10}} >
<Text style={{flex:0.8}} >Item Total</Text>
<Text style={{flex:0.2}} >Rs 30000.00</Text>
  </View>
  <View style={{flexDirection:"row", paddingTop:10}} >
<Text style={{flex:0.8}} >Coupon Discount</Text>
<Text style={{flex:0.2}} >Rs 10000.00</Text>
  </View>
  <View style={{flexDirection:"row", paddingTop:10}} >
<Text style={{flex:0.8}} >Delivery Fee</Text>
<Text style={{flex:0.2}} >Rs 100.00</Text>
  </View>
  <View style={{flexDirection:"row", paddingTop:10}} >
<Text style={{flex:0.8, fontWeight:"bold"}} >To Pay</Text>
<Text style={{flex:0.2}} >Rs 20000.00</Text>
  </View>
  
</View>
</View>
<View style={ styles.bottomView} >
 
                  <Text style={styles.textStyle}>Proceed To Pay</Text>
 
               </View>
        </View>
        
    );
  }
}

export default CartScreen;
