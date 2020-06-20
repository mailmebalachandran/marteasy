import React, { Component } from 'react';
import {Text} from 'react-native-elements';
import styles from './styles';

class Line extends Component{
    render(){
        return(<Text style={styles.textStyle} numberOfLines={1}>............................................................................................................</Text>);
    }
}

export default Line;