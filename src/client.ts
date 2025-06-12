import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.FUB_API_KEY ?? '';
const encodedAuth = Buffer.from(`${apiKey}:`).toString('base64');

const client: AxiosInstance = axios.create({
    baseURL: 'https://api.followupboss.com/v1/',
    headers: {
        Authorization: `Basic ${encodedAuth}`,
        'Content-Type': 'application/json',
    },
});

export default client;
