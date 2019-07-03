import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from '../components/ProgressBar';
import AllStories from '../constants/AllStories';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Stories = (props) => {
  const [stories, setStories] = useState(AllStories);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProgressIndex, setCurrentProgressIndex] = useState(0);

  const changeStory = (evt) => {
    if (evt.locationX > SCREEN_WIDTH / 2) {
      nextStory();
    } else {
      prevStory();
    }
  };

  const nextStory = () => {
    if (stories.length - 1 > currentIndex) {
      setCurrentProgressIndex(currentProgressIndex + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStory = () => {
    if (currentIndex > 0 && stories.length) {
    //   setStortPause(currentIndex);
      setCurrentProgressIndex(currentProgressIndex - 1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const setStorySeen = (index) => {
    const tempAllStories = stories.slice();
    const currentStory = tempAllStories[index];
    tempAllStories[index] = ({ ...currentStory, isSeen: true });
    setStories(tempAllStories);
  };

  const setStortPause = (index) => {
    const tempAllStories = stories.slice();
    const currentStory = tempAllStories[index];
    tempAllStories[index] = ({ ...currentStory, isPause: false });
    setStories(tempAllStories);
  };

  const isEnd = () => {
    console.log('index on end', currentProgressIndex, currentIndex);
    if (currentProgressIndex <= currentIndex) {
      nextStory();
      setStorySeen(currentProgressIndex);
    }
  };


  const progressBarArray = () => (
    <View style={styles.progressBarArray}>
      {stories.map((item, index) => (
        <ProgressBar
          index={index}
          idx={currentProgressIndex}
          currentIndex={currentIndex}
          isSeen={item.isSeen}
          onCompleted={nextStory}
          onStorySeen={setStorySeen}
          isEnded={isEnd}
        />
      ))
    }
    </View>
  );

  const storyContent = () => {
    const { url, type } = stories[currentIndex];
    if (type === 'image') {
      return (
        <Image
          source={{ uri: url }}
          style={styles.content}
        />
      );
    }
    return (
      <Video
        source={{ uri: url }}
        style={styles.content}
      />
    );
  };

  const userView = () => (
    <View style={styles.userView}>
      <Image
        source={{ uri: 'http://assets.amitshah.co.in/new/amit_shah/amit_shah.JPG' }}
        style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 8 }}
      />
      <Text style={styles.name}>Amit Shah</Text>
      <Text style={styles.time}>2h</Text>
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
    <TouchableWithoutFeedback
      onPress={e => changeStory(e.nativeEvent)}
      delayPressIn={200}
    //   onPressIn={() => alert('pause')}
      style={styles.container}
    >
      <View style={styles.container}>
        {storyContent()}
        {progressBarArray()}
        {userView()}
        {stories[currentIndex].isReadMore && readMore()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingTop: 30,
    backgroundColor: '#F5FCFF',
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
    top: 45,
    width: '98%',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 12,
  },
  time: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 8,
    flex: 1,
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

export default Stories;
