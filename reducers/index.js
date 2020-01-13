import { combineReducers } from 'redux';

import user from './user';
import userToken from './token';

export default combineReducers({
    user,
    userToken
});