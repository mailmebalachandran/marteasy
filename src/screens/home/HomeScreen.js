import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import Slider from '../../components/Slider/Slider';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <StatusBarComponent styleType={0} />
        <Header navigation={this.props.navigation} />
        <Slider />
      </View>
    );
  }
}

export default HomeScreen;
