import axios from 'axios';
import https from 'https';

import { envConfig } from '@shared/config';

const agent = new https.Agent({ rejectUnauthorized: false });
export const axiosInstance = axios.create({
    baseURL: `${envConfig.BASE_URL}`,
    httpsAgent: agent,
});
