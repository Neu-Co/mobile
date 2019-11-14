
export const login = (username, password) => {
    return fetch('http://10.13.20.89:8080/api/login', {
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
    .then( res => res.json() )
    .catch(err => {
        console.log(err.message);
    })
}