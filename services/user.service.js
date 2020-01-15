export const register = (username, email, phone, password, cpassword) => {
    return fetch('http://192.168.1.104/api/register', {
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
    return fetch('http://192.168.1.104/api/details', {
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