/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Stories from './src/screens/Stories';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Stories />
    );
  }
}


