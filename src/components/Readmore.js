import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// eslint-disable-next-line react/prefer-stateless-function
class Readmore extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onReadMore,
    } = this.props;

    return (
      <TouchableOpacity onPress={onReadMore} style={styles.readMoreWrapper}>
        <View style={styles.readMore}>
          <Icon name="chevron-up" size={20} color="white" />
        </View>
        <Text style={styles.readText}>Read More</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  readMore: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  readText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 12,
    color: 'white',
    marginTop: 8,
  },
  readMoreWrapper: {
    position: 'absolute',
    bottom: 25,
    width: '98%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Readmore;
