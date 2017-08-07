import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';

import AuthScreen from './screens/AuthScreen';
import BuddyListScreen from './screens/BuddyListScreen';
import BuddyProfileScreen from './screens/BuddyProfileScreen';
import ProfileScreen from './screens/ProfileScreen';
import SetLocationScreen from './screens/SetLocationScreen';
import SetupProfileScreen from './screens/SetupProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      // welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          profile: { screen: ProfileScreen },
          setupProfile: { screen: SetupProfileScreen },
          setLocation: { screen: SetLocationScreen },
          buddys: {
            screen: StackNavigator({
              buddyList: { screen: BuddyListScreen },
              buddyProfile: { screen: BuddyProfileScreen }
            })
          }
        })
      }
    },{
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
