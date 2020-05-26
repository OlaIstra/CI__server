import axios from 'axios';
import https from 'https';

require('dotenv').config();

export const baseURL = 'https://hw.shri.yandex/';

const agent = new https.Agent({ rejectUnauthorized: false });
export const axiosInstance = axios.create({
    httpsAgent: agent,
    headers: { Authorization: `Bearer ${process.env.TOKEN}` },
});
