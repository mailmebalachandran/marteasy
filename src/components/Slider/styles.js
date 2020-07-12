import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
  },
  containers: {
    margin: 5,
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  flatListViewStyle: {
    height: 200,
    width: 250,
  },
  flatListImageStyle: {
    height: 200,
    width: '100%',
    resizeMode: 'contain'
  },
});

export default styles;
