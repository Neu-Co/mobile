import { AsyncStorage } from 'react-native';

import * as actionTypes from './types';

import {register} from '../services/user.service';

import { setToken } from './token';

export const setUser = (user) => async dispatch => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(user));
    dispatch({ type: actionTypes.SET_USER, user })
  } catch (error) {
    console.log(error);
  }
}

export const delUser = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('@user');
    dispatch({ type: actionTypes.DEL_USER });
  } catch (error) {
    console.log(error);
  }

}

export const getUser = () => async dispatch => {
  try {
    const user = JSON.parse(await AsyncStorage.getItem('@user'));
    dispatch(setUser(user));
  } catch (error) {
    console.log(error);
  }
}

export const registerUser = (username, email, phone, password, cpassword) => async dispatch => {
  try {
    const response = await register(username, email, phone, password, cpassword);
    console.log(response);
    const token = response.success ? response.success.token : false;
    await dispatch(setToken(token));
    if(!response.error && token ) return true;
  } catch (error) {
    console.log(error);
  }
}