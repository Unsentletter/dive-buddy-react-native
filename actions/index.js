import axios from 'axios';

import { SIGNIN_URL } from '../api';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
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

export const loginUser = ({ email, password }) => {
  console.log(email, password);
  return (dispatch) => {
    axios.post('https://safe-beyond-53212.herokuapp.com/v1/user/signup', {
      email,
      password
    }).then((user) => {
      console.log('user', user.headers.x-auth);
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user})
    }).catch((err) => {
      console.log('error', err)
    })
  };
};