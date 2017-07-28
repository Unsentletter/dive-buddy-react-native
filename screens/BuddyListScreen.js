import React, { Component} from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements'

class BuddyListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Buddy List',
      headerRight: (
        <Button
          title= 'practise'
          onPress={() => navigation.navigate('buddyProfile')}
        />),
      style: {
        // Fixes android spacing at top of header
        marginTop: Platform.OS === 'android' ? 24 :0
      }
    }
  };

  render() {
    return (
      <View>
        <Text>BuddyListScreen</Text>
        <Text>BuddyListScreen</Text>
        <Text>BuddyListScreen</Text>
        <Text>BuddyListScreen</Text>
        <Text>BuddyListScreen</Text>
        <Text>BuddyListScreen</Text>
      </View>
    )
  }
}

export default BuddyListScreen;