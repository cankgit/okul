import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Intro from './src/pages/Intro/intro';

export default class okul extends Component {
  render() {
    return (
     <Intro/>
    );
  }
}


AppRegistry.registerComponent('okul', () => okul);
