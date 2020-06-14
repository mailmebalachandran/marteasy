import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:10
    },
    cardContainer: {
        flex: 1,
        flexDirection:"row",
    },
    imageView: {
        flex: 1,
        width: "50%",
    },
    imageStyles: {
        width: 100,
        height: 100,
    },
    detailsView: {
        flex: 2,
        justifyContent: "flex-end",
        width: "40%",
    }
});

export default styles;