import axios from 'axios';
import { AsyncStorage } from 'react-native';


import { SIGNIN_URL } from '../api';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from "./types"

const url = 'https://safe-beyond-53212.herokuapp.com/v1';

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
  let token = await axios.post(`${url}/user/signup`, {
    email,
    password
  });

  await AsyncStorage.setItem('localToken', token.headers['x-auth']);
  dispatch({ type: LOGIN_USER_SUCCESS, payload: token});
};

export const logoutUser = async(token) => {
  console.log('token', token);
  await axios.post(`${url}/user/loggedIn/deleteUser`, token);

  AsyncStorage.removeItem('localToken');
  console.log('logged out');
  dispatch({ type: LOGOUT_USER_SUCCESS })
};

