import axios, { AxiosPromise } from 'axios';
const url = 'https://ahardy42.com';

export const sendMail: (name: string, email: string, message: string) => AxiosPromise<any> = (name, email, message) => {
    return axios.post(url + '/api/email', {
        name,
        email,
        message
    });
}