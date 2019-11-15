export const register = (username, email, phone, password, cpassword) => {
    return fetch('http://10.13.21.1:8000/api/register', {
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