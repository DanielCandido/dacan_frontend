import axios, { AxiosError } from 'axios'
import { login } from '../interfaces/login'
import { User } from '../interfaces/user';

const configService = axios.create({
    baseURL: process.env.REACT_APP_API_URL + '/api/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    }
});

export class loginService {
    login = async (values: login) => {
        try{
            const response = await configService.post('/login', values);
            const login = response.data

            return login
        } catch (err) {
            if (err && err.reponse) {
                const axiosError = err as AxiosError;
                console.log(axiosError);
                return axiosError.response?.data;
            }
            throw err;
        }
    }

    loginFacebook = async(values: User) => {
        try{
            const response = await configService.post('/loginFacebook', values);
            const login = response.data

            return login
        } catch (err) {
            if (err && err.reponse) {
                const axiosError = err as AxiosError;
                console.log(axiosError);
                return axiosError.response?.data;
            }
            throw err;
        }
    }
}