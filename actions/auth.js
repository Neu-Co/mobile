import { login } from '../services/auth.service';

export const loginUser = (username, password) => async dispatch => {
    try {
        const response = await login(username, password);
        console.log(response)
        if(response) return true;
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