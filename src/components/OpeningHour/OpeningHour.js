import React, {Component} from 'react';
import styles from './styles';
import {Avatar} from 'react-native-elements';
import {View} from 'react-native';

class OpeningHour extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const storeTime = this.props.storeTime;
    let values;
    if (storeTime !== undefined && storeTime.length > 0) {
      values = (
        <View style={styles.containerStyle}>
          <Avatar
            size="small"
            rounded
            title="Su"
            titleStyle={styles.avatarTitleStyle}
            containerStyle={
              this.props.storeTime === 'open'
                ? styles.avatarContainerGreenStyle
                : styles.avatarContainerRedStyle
            }
          />
          <Avatar
            size="small"
            rounded
            title="Mo"
            titleStyle={{fontSize: 10}}
            containerStyle={
              this.props.storeTime.monday.status === 'open'
                ? styles.avatarContainerGreenStyle
                : styles.avatarContainerRedStyle
            }
          />
          <Avatar
            size="small"
            rounded
            title="Tu"
            titleStyle={{fontSize: 10}}
            containerStyle={
              this.props.storeTime.tuesday.status === 'open'
                ? styles.avatarContainerGreenStyle
                : styles.avatarContainerRedStyle
            }
          />
          <Avatar
            size="small"
            rounded
            title="We"
            titleStyle={{fontSize: 10}}
            containerStyle={
              this.props.storeTime.wednesday.status === 'open'
                ? styles.avatarContainerGreenStyle
                : styles.avatarContainerRedStyle
            }
          />
          <Avatar
            size="small"
            rounded
            title="Th"
            titleStyle={{fontSize: 10}}
            containerStyle={
              this.props.storeTime.thursday.status === 'open'
                ? styles.avatarContainerGreenStyle
                : styles.avatarContainerRedStyle
            }
          />
          <Avatar
            size="small"
            rounded
            title="Fr"
            titleStyle={{fontSize: 10}}
            containerStyle={
              this.props.storeTime.friday.status === 'open'
                ? styles.avatarContainerGreenStyle
                : styles.avatarContainerRedStyle
            }
          />
          <Avatar
            size="small"
            rounded
            title="Sa"
            titleStyle={{fontSize: 10}}
            containerStyle={
              this.props.storeTime.saturday.status === 'open'
                ? styles.avatarContainerGreenStyle
                : styles.avatarContainerRedStyle
            }
          />
        </View>
      );
    } else {
      values = null;
    }
    return <View>{values}</View>;
  }
}

export default OpeningHour;
