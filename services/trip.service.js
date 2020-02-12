import config from './config.service';

export const getAllTrip = (token) => {
    return fetch(`${config.API_URL}/api/trip/list`, {
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