
export const login = (username, password) => {
    return fetch('http://localhost:8000/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password,
            })
    })
    .then( res => res.json() )
}