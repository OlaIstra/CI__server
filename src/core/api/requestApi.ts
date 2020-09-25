import axios, { AxiosResponse } from 'axios';
import { ISettings } from '@server/components/settings/interfaces';

require('dotenv').config();

axios.defaults.baseURL = process.env.BASE_URL_API;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

export const Activities = {
    getSettings: () => requests.get('/settings'),
    saveSettings: (settings: ISettings) => requests.post('/settings', settings),
    getBuilds: () => requests.get('/builds'),
    saveBuild: (commitHash: string) => requests.post('/builds', commitHash),
    getBuildDetails: (id: string) => requests.get(`/builds/${id}`),
    getBuildLogs: (id: string) => requests.get(`/builds/${id}/logs`),
    deleteBuilds: () => requests.delete('/builds'),
};
