import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressArray from '../components/ProgressArray';
import AllStories from '../constants/AllStories';
import StoryContainer from '../components/StoryContainer';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Stories = (props) => {
  const [stories, setStories] = useState(AllStories);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [duration, setDuration] = useState(3);
  const pauseId = null;

  const changeStory = (evt) => {
    if (evt.locationX > SCREEN_WIDTH / 2) {
      nextStory();
    } else {
      prevStory();
    }
  };

  const nextStory = () => {
    if (stories.length - 1 > currentIndex) {
      setCurrentIndex(currentIndex + 1);
      setLoaded(false);
      setDuration(3);
    }
  };

  const prevStory = () => {
    if (currentIndex > 0 && stories.length) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const setStorySeen = (index) => {
    const tempAllStories = stories.slice();
    const currentStory = tempAllStories[index];
    tempAllStories[index] = ({ ...currentStory, isSeen: true });
    setStories(tempAllStories);
  };

  const isEnd = () => {
    nextStory();
    setStorySeen(currentIndex);
  };

  const imageLoaded = () => {
    try {
      if (pauseId) clearTimeout(pauseId);
      setLoaded(true);
    } catch (e) {
      // console.log(e)
    }
  };

  const onVideoLoaded = (length) => {
    try {
      if (pauseId) clearTimeout(pauseId);
      setLoaded(true);
      setDuration(length);
    } catch (e) {
      // console.log(e)
    }
  };

  const onPause = () => {
    setIsPause(!isPause);
  };


  return (
    <TouchableOpacity
      activeOpacity={1}
      delayLongPress={1000}
      onPress={e => changeStory(e.nativeEvent)}
      onLongPress={() => onPause()}
      onPressOut={() => onPause()}
      style={styles.container}
    >
      <StoryContainer
        pause={isPause}
        story={stories[currentIndex]}
        onVideoLoaded={onVideoLoaded}
        onImageLoaded={() => imageLoaded()}
      />
      <ProgressArray
        next={isEnd}
        isLoaded={isLoaded}
        duration={duration}
        pause={isPause}
        stories={stories}
        currentIndex={currentIndex}
        currentStory={stories[currentIndex]}
        length={stories.map((_, i) => i)}
        progress={{ id: currentIndex }}
      />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
