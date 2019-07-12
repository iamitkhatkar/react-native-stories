/* eslint-disable */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class UserView extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props,
    } = this;

    return (
      <View style={styles.userView}>
        <Image
          source={{ uri: props.profile }}
          style={styles.image}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.time}>Posted 2h ago</Text>
        </View>
        <TouchableOpacity onPress={props.onClosePress}>
          <Icon
            name="close"
            color="white"
            size={25}
            style={{ marginRight: 8 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 8,
  },
  userView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 55,
    width: '98%',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 12,
    color: 'white',
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 3,
    marginLeft: 12,
    color: 'white',
  },
});

export default UserView;
