import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:10
    },
    bottomView:{
 
        width: '100%', 
        height: 50, 
        backgroundColor: '#087f23', 
        justifyContent: 'center', 
        alignItems: 'center',
        bottom:0,
        position:"absolute"
        
      },
      textStyle:{
          color:"#FFFFFF",
          fontWeight:"bold"
      }
});

export default styles;