import * as actionTypes from '../actions/types';

const initialState = {};

export default function user(state = initialState, action) {
    switch(action.type) {
        case (actionTypes.SET_USER):
            return { ...state, ...action.user }
        case (actionTypes.DEL_USER):
            return { ...state, user: null }
    default:
        return state;
    }
}