import React, {Component} from 'react';
import styles from './styles';
import {Avatar} from 'react-native-elements';
import {View} from 'react-native';
import {OPENING_HOUR_TITLES} from './constants';
import {getIsOpen} from './utils';

class OpeningHour extends Component {
  constructor(props) {
    super(props);
  }
  renderBgColor = (day, {time}) => {
    if (time.length > 0) {
      let color = getIsOpen(day, time)
        ? styles.avatarContainerGreenStyle
        : styles.avatarContainerRedStyle;
      return color;
    }
    else{
      return styles.avatarContainerRedStyle;
    }
  };

  render() {
    const {storeDetail} = this.props;
    return (
      <View style={styles.containerStyle}>
        {OPENING_HOUR_TITLES.map(title => (
          <Avatar
            size="small"
            rounded
            title={title}
            titleStyle={styles.avatarTitleStyle}
            containerStyle={this.renderBgColor(
              title,
              storeDetail.store_open_close,
            )}
          />
        ))}
      </View>
    );
  }
}

export default OpeningHour;
