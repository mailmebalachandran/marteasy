import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:10
    },
    containers:{
        margin:5,
        padding:10

    },
    row: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection:"row",
        width:'100%'

    }
});

export default styles;