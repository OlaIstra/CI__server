import axios, { AxiosResponse } from 'axios';
import { ISettings } from '@shared/interfaces/settings';
import { IEndpoints } from '@shared/enums';

require('dotenv').config();

axios.defaults.baseURL = process.env.BASE_URL_API;

const responseBody = (response: AxiosResponse<ISettings>) => response.data;

export const requests = {
    get: (url: IEndpoints.Settings) => axios.get(url).then(responseBody),
    post: (url: IEndpoints.Settings, body: ISettings) => axios.post(url, body).then(responseBody),
    put: (url: IEndpoints.Settings, body: ISettings) => axios.put(url, body).then(responseBody),
    delete: (url: IEndpoints.Settings) => axios.delete(url).then(responseBody),
};
