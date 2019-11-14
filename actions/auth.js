import { login } from '../services/auth.service';
import { setToken } from './token';

export const loginUser = (username, password) => async dispatch => {
    try {
        const response = await login(username, password);
        const token = response.success ? response.success.token : false;
        dispatch(setToken(token));
        if(!response.error && token ) return true;
    } catch (error) {
        console.log(error);
    }
}

export const logoutUser = () => async dispatch => {
    try {

    } catch (error) {
        console.log(error);
    }
}