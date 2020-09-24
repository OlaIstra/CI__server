import axios, { AxiosResponse } from 'axios';
import { ISettings } from '@server/components/settings/interfaces';

axios.defaults.baseURL = 'http://localhost:8080/api';

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
