import React, { Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.onAuthComplete(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('setupProfile')
    }
  }

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password })
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text>Email</Text>
        <TextInput
          name="email"
          value={this.props.email}
          onChangeText={this.onEmailChange}
          style={styles.input}
          autoCorrect= {false}
          keyboardType={'email-address'}
        />
        <Text>Password</Text>
        <TextInput
          name="password"
          value={this.props.password}
          onChangeText={this.onPasswordChange}
          style={styles.input}
        />
        <Button
          onPress={this.onButtonPress}
          raised
          title="Log In"
          backgroundColor="blue"
         />
        <Button
          title="Sign Up"
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    token: state.auth.token
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(AuthScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    color: '#fff',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
});