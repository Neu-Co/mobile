import config from './config.service';

export const register = (username, email, phone, password, cpassword) => {
    return fetch(`${config.API_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                email: email,
                phone: phone,
                password: password,
                c_password: cpassword
            })
    })
    .then( res => res.json() )
    .catch(err => {
        console.log(err.message);
    })
}

export const getUserDetail = (token) => {
    return fetch(`${config.API_URL}/api/details`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
    })
    .then( res => res.json() )
    .catch(err => {
        console.log(err.message);
    })
}