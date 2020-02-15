import { login } from '../services/auth.service';
import { setToken, removeToken } from './token';

export const loginUser = (username, password) => async dispatch => {
    try {
        const response = await login(username, password);
        const token = response.success ? response.success.token : false;
        await dispatch(setToken(token));
        if(!response.error && token ) return true;
    } catch (error) {
        console.log(error);
    }
}

export const logoutUser = () => async dispatch => {
    try {
        const res = await removeToken();
        if (res) return true
        else return false 
    } catch (error) {
        console.log(error);
    }
}