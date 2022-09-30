import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/auth',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
    }
})