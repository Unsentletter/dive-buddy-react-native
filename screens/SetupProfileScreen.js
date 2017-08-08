import React, { Component} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';


class SetupProfileScreen extends Component {
  onLogoutButtonPress = () => {
    const token = this.props.token;
    logoutUser(token);
  };

  render() {
    return (
      <View style={styles.screen}>
        <ScrollView
          scrollEnabled={false}
        >
        <FormLabel>Username</FormLabel>

          <FormInput />

        <FormLabel>Number Of Dives</FormLabel>
        <FormInput
          keyboardType={'numeric'}
        />
        <FormLabel>About Me</FormLabel>
        <FormInput
          multiline={true}
        />

        <Button
          raised
          title="Log Out"
          onPress={this.onLogoutButtonPress}
        />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
};

export default connect(mapStateToProps, { logoutUser })(SetupProfileScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems: 'center',
  }
});