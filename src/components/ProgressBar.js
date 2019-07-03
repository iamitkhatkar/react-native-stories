import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { index, currentIndex, isSeen, idx } = props;
  const scale = useRef(new Animated.Value(1)).current;
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (currentIndex === index && index > 0) {
      scale.setValue(0);
      Animated.timing(scale, {
        toValue: width,
        duration: 2000,
        easing: Easing.linear,
      }).start(() => idx === currentIndex && props.isEnded());
    }

    if (currentIndex === 0 && isSeen) {
      scale.setValue(0);
      Animated.timing(scale, {
        toValue: width,
        duration: 2000,
        easing: Easing.linear,
      }).start(() => idx === currentIndex && props.isEnded());
    }
  }, [currentIndex]);

  const onLayoutAdded = (evt) => {
    setWidth(evt.width);
    if (idx === 0) {
      scale.setValue(0);
      Animated.timing(scale, {
        toValue: evt.width,
        duration: 2000,
        easing: Easing.linear,
      }).start(() => idx === currentIndex && props.isEnded());
    }
  };

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
  onCompleted: PropTypes.func,
  isSeen: PropTypes.bool,
  isPaused: PropTypes.bool,  
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
