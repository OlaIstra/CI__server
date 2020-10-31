import axios from 'axios';
import https from 'https';

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
require('dotenv').config();

const agent = new https.Agent({ rejectUnauthorized: false });
export const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_URL}`,
    httpsAgent: agent,
});
