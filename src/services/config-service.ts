import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL?.concat('api/'),
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('tokenMoney')?.toString(),
    }
});

export default apiClient;