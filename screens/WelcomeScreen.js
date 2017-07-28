import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to DiveBuddy!!!', color: '#03A9F4'},
  { text: 'Set your location and find a new dive buddy', color: '#009688'}
];
class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  };

  render() {
    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    )
  }
}

export default WelcomeScreen;