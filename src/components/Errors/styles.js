import { StyleSheet } from 'react-native';
import * as ThemeColor from '../../themes/colors';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  padding30: {
    padding: 30,
    width:'80%'
  },
  imgViewStyle: {
    alignItems: "center"
  },
  errorHeader: {
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center"
  },
  errorSubText:{
    fontSize:18, 
    marginTop:10, 
    marginBottom:30, 
    textAlign:"center"
  }
});

export default styles;
