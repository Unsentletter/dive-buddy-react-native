import axios from 'axios';
import { AsyncStorage } from 'react-native';


import { SIGNIN_URL } from '../api';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from "./types"

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({ email, password }) => async dispatch => {
  let token = await AsyncStorage.getItem('localToken');

  if (token) {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: token})
  } else {
    doLoginUser(dispatch, { email, password })
  }
};

const doLoginUser = async (dispatch, { email, password }) => {
  let token = await axios.post('https://safe-beyond-53212.herokuapp.com/v1/user/signup', {
    email,
    password
  });

  console.log('token', token.headers['x-auth']);

  await AsyncStorage.setItem('localToken', token);
  dispatch({ type: LOGIN_USER_SUCCESS, payload: token});
  console.log('storage', AsyncStorage);
};


