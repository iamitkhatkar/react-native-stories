/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import PropTypes from 'prop-types';

const Story = (props) => {
  const { story } = props;
  const { url, type } = story;
  
  return (
    <View style={styles.container}>
      {type === 'image' ? (
        <Image
          source={{ uri: url }}
          onLoadEnd={props.onImageLoaded}
          style={styles.content}
        />
      )
        : (
          <Video
            source={{ uri: url }}
            paused={props.pause}
            onLoad={item => props.onVideoLoaded(item)}
            style={styles.content}
          />
        )}
    </View>
  );
};

Story.propTypes = {
  story: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // paddingTop: 30,
    backgroundColor: 'white',
  },
  content: { width: '100%',
    height: '100%',
  },
});

export default Story;
