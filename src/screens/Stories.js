import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import AllStories from '../constants/AllStories';
import StoryContainer from '../components/StoryContainer';


const Stories = (props) => {
  const [isModelOpen, setModel] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const onStorySelect = (index) => {
    setCurrentUserIndex(index);
    setModel(true);
  };

  const onStoryClose = () => {
    setModel(false);
  };

  const onStoryNext = () => {
    if (AllStories.length - 1 > currentUserIndex) {
      setCurrentUserIndex(currentUserIndex + 1);
    } else {
      setModel(false);
    }
  };

  const onStoryPrevious = () => {
    if (currentUserIndex > 0) { setCurrentUserIndex(currentUserIndex - 1); }
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={AllStories}
        horizontal
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onStorySelect(index)}>
            <Image
              style={styles.circle}
              source={{ uri: item.profile }}
            />
          </TouchableOpacity>
        )}
      />

      <Modal style={styles.modal} position="center" isOpen={isModelOpen} useNativeDriver onClosed={onStoryClose}>
        <StoryContainer
          onClose={onStoryClose}
          onStoryNext={onStoryNext}
          onStoryPrevious={onStoryPrevious}
          user={AllStories[currentUserIndex]}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07ADA9',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingTop: 50,
  },
  circle: {
    width: 80,
    margin: 4,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  modal: {
    flex: 1,
  },
});


export default Stories;
