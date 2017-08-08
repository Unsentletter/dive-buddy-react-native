import React, { Component } from 'react';
import _ from 'lodash';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to DiveBuddy!!!', color: '#03A9F4'},
  { text: 'Set your location and find a new dive buddy', color: '#009688'}
];
class WelcomeScreen extends Component {
  state = { token: null};

  async componentWillMount() {
    let token = await AsyncStorage.getItem('localToken');

    if (token) {
      console.log('token', token);
      this.props.navigation.navigate('profile');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  };

  render() {
      if (_.isNull(this.state.token)) {
        return <AppLoading />
      }

      return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    )
  }
}

export default WelcomeScreen;