import React, { Component} from 'react';
import { View, Text } from 'react-native';

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>Email</Text>
        <TextInput
          name="email"
          value={this.props.email}
          onChangeText={this.onEmailChange}
          style={styles.input}
        />
        <Text>Password</Text>
        <TextInput
          name="password"
          value={this.props.password}
          onChangeText={this.onPasswordChange}
          style={styles.input}
        />
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text style={styles.button}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AuthScreen;