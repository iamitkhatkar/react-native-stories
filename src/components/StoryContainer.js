import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Story from './Story';

const StoryContainer = (props) => {
  const { story } = props;
  const { isReadMore } = story;

  const userView = () => (
    <View style={styles.userView}>
      <Image
        source={{ uri: 'http://assets.amitshah.co.in/new/amit_shah/amit_shah.JPG' }}
        style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 8 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>Amit Shah</Text>
        <Text style={styles.time}>Posted 2h ago</Text>
      </View>
      <Icon name="close" color="black" size={25} style={{ marginRight: 8 }} />
    </View>
  );

  const readMore = () => (
    <TouchableOpacity style={styles.readMore}>
      <View style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
      }}
      >
        <Icon name="chevron-up" size={28} color="white" />
      </View>
      <Text style={styles.readText}>Read More</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Story story={story} />
      {userView()}
      {isReadMore && readMore()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingTop: 30,
    backgroundColor: 'red',
  },
  progressBarArray: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    width: '98%',
    height: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 3,
    marginLeft: 12,
  },
  content: { width: '100%',
    height: '100%',
  },
  readMore: {
    position: 'absolute',
    bottom: 45,
    width: '98%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 12,
    color: 'white',
    marginTop: 8,
  },
});

export default StoryContainer;
