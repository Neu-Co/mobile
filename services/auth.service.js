import config from './config.service';

export const login = (username, password) => {
    return fetch(`${config.API_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
    })
    .then( res => handleResponse(res) )
    .catch(err => {
        console.log(err.message);
    })
}

const handleResponse = (res) => {
    return res.json();
}