import axios, { AxiosResponse } from 'axios';

import { ISettings } from '@shared/interfaces/settings';
import { EndPoints } from '@shared/enums';
import { envConfig } from '@shared/config';

axios.defaults.baseURL = envConfig.BASE_URL_API;

const responseBody = (response: AxiosResponse<ISettings>) => response.data;

export const requests = {
    get: (url: EndPoints.Settings) => axios.get(url).then(responseBody),
    post: (url: EndPoints.Settings, body: ISettings) => axios.post(url, body).then(responseBody),
    put: (url: EndPoints.Settings, body: ISettings) => axios.put(url, body).then(responseBody),
    delete: (url: EndPoints.Settings) => axios.delete(url).then(responseBody),
};
