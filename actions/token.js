import { AsyncStorage } from 'react-native';

import * as actionTypes from './types';

export const getToken = () => async dispatch => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem(`@token`));
      dispatch({ type: actionTypes.GET_TOKEN, token });
      return true;
    } catch (error) {
      console.log(error);
    }
  };

export const setToken = token => async dispatch => {
  try {
    await AsyncStorage.setItem('@token', JSON.stringify(token));
    dispatch({ type: actionTypes.SET_TOKEN, token });
    return true;
  } catch (error) {
    console.log(error);
  }
}

export const removeToken = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('userToken');
    dispatch({ type: actionTypes.DEL_TOKEN });
    return true;
  } catch (error) {
    console.log(error);
  }
}