import axios, { AxiosResponse } from 'axios';
import { ISettings } from '@shared/interfaces/settings';

require('dotenv').config();

axios.defaults.baseURL = process.env.BASE_URL_API;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

const apiSettings = 'api/settings';
const apiBuilds = 'api/builds';

export const Activities = {
    getSettings: () => requests.get(apiSettings),
    saveSettings: (settings: ISettings) => requests.post(apiSettings, settings),
    getBuilds: () => requests.get(apiBuilds),
    saveBuild: (commitHash: string) => requests.post(apiBuilds, commitHash),
    getBuildDetails: (id: string) => requests.get(`${apiBuilds}/${id}`),
    getBuildLogs: (id: string) => requests.get(`${apiBuilds}/${id}/logs`),
    deleteBuilds: () => requests.delete(apiBuilds),
};
