import { AsyncStorage } from 'react-native';

import * as actionTypes from './types';

export const getStorageToken = name => async dispatch => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem(`@token:${name}`));
  
      dispatch({ type: actionTypes.GET_TOKEN, name, token });
  
      if (name === 'user' && token) {
        await dispatch(queryUser(token));
      }
  
      return true;
    } catch (error) {
      dispatch(displayError(error));
    }
  };