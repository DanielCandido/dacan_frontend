import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL + '/api/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('tokenMoney'),
    }
});

export default apiClient;