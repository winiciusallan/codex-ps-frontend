import axios from 'axios';
const environment = process.env.ENV ? `http://localhost:${process.env.PORT}`: 'https://codexjr-backend.herokuapp.com';
export const api = axios.create({
    baseURL: environment,
})