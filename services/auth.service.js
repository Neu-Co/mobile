
export const login = (username, password) => {
    return fetch('http://192.168.1.104/api/login', {
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