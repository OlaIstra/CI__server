import axios, { AxiosResponse } from 'axios';

import { IJob, IJobDetails, IJobLogs } from '@shared/interfaces/jobs';
import { ISettings } from '@shared/interfaces/settings';
import { EndPoints } from '@shared/enums';
import { envConfig } from '@shared/config';

axios.defaults.baseURL = envConfig.BASE_URL_API;

const responseBodySettings = (response: AxiosResponse<ISettings>) => response.data;
const responseBodyJobs = (response: AxiosResponse<Array<IJob>>) => response.data;
const responseBodyJobDetails = (response: AxiosResponse<IJobDetails>) => response.data;
const responseBodyJobLogs = (response: AxiosResponse<IJobLogs>) => response.data;

export const requestsSettings = {
    get: (url: EndPoints.Settings) => axios.get(url).then(responseBodySettings),
    post: (url: EndPoints.Settings, body: ISettings) =>
        axios.post(url, body).then(responseBodySettings),
    put: (url: EndPoints.Settings, body: ISettings) =>
        axios.put(url, body).then(responseBodySettings),
    delete: (url: EndPoints.Settings) => axios.delete(url).then(responseBodySettings),
};

export const requestsJobs = {
    get: (url: EndPoints.Jobs) => axios.get(url).then(responseBodyJobs),
    post: (url: EndPoints.Jobs, body: IJob) => axios.post(url, body).then(responseBodyJobs),
    put: (url: EndPoints.Jobs, body: Array<IJob>) => axios.put(url, body).then(responseBodyJobs),
    delete: (url: EndPoints.Jobs) => axios.delete(url).then(responseBodyJobs),
};

export const requestsJobDetails = {
    get: (url: EndPoints.Jobs, id: string) =>
        axios.get(`${url}/${id}`).then(responseBodyJobDetails),
};

export const requestsJobLogs = {
    get: (url: EndPoints.Jobs, id: string) =>
        axios.get(`${url}/${id}/logs`).then(responseBodyJobLogs),
};
