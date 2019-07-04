/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { index, currentIndex, duration, length, active } = props;
  const scale = useRef(new Animated.Value(1)).current;
  const [width, setWidth] = useState(0);

  const onLayoutAdded = (evt) => {
    setWidth(evt.width);
  };

  useEffect(() => {
    if (index === currentIndex && length - 1 !== currentIndex) {
      scale.setValue(0);
    }
    switch (active) {
      case 2:
        return scale.setValue(width);
      case 1:
        return props.isLoaded && !props.pause ? Animated.timing(scale, {
          toValue: width,
          duration: duration * 1000,
          easing: Easing.linear,
        }).start(({ finished }) => {
          if (finished) props.next();
        })
          : props.pause ? scale.setValue(0) : scale.setValue(0);
      case 0:
        return scale.setValue(0);
      default:
        return scale.setValue(0);
    }
  });

  return (
    <View onLayout={evt => onLayoutAdded(evt.nativeEvent.layout)} style={styles.container}>
      <Animated.View style={[styles.container, {
        width: scale,
        backgroundColor: index <= currentIndex ? 'white' : '#555',
        position: 'absolute',
        top: 0,
        margin: 0,
      }]}
      />
    </View>
  );
};

ProgressBar.propTypes = ({
  index: PropTypes.number,
  currentIndex: PropTypes.number,
});

const styles = StyleSheet.create({
  container: {
    height: 4,
    flex: 1,
    backgroundColor: '#555',
    margin: 2,
  },
});

export default ProgressBar;
