import { AsyncStorage } from 'react-native';

import * as actionTypes from './types';

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