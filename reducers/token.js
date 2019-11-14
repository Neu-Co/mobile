import * as actionTypes from '../actions/types';

const initialState = {};

export default function token(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_TOKEN:
      return { ...state, userToken: action.token };
    case actionTypes.SET_TOKEN:
      return { ...state, userToken: action.token };
    case actionTypes.DEL_TOKEN:
      return { ...state, userToken: null };
    default:
      return state;
  }
}

