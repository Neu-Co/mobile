import { AsyncStorage } from 'react-native';

import * as actionTypes from './types';

export const getToken = () => async dispatch => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem(`@token`));
      dispatch({ type: actionTypes.GET_TOKEN, token });
      if(token) return true;
    } catch (error) {
      console.log(error);
    }
  };

export const setToken = userToken => async dispatch => {
  try {
    await AsyncStorage.setItem('@token', JSON.stringify(userToken));
    console.log(userToken);
    dispatch({ type: actionTypes.SET_TOKEN, userToken });
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