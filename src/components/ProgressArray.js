import React from 'react';
import { View, StyleSheet } from 'react-native';
import Proptypes from 'prop-types';
import ProgressBar from './ProgressBar';

const ProgressArray = (props) => {
  return (
    <View style={styles.progressBarArray}>
      {props.length.map((i, index) => (
        <ProgressBar
          index={index}
          duration={props.duration || 3}
          currentIndex={props.currentIndex}
          next={props.next}
          length={props.stories.length}
          active={i === props.currentIndex ? 1 : (i < props.currentIndex ? 2 : 0)}
          isLoaded={props.isLoaded}
          pause={props.pause}
        />
      ))
  }
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarArray: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    width: '98%',
    height: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProgressArray;
