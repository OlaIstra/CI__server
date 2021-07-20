import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { FAKE_JOBS, FAKE_JOB_DETAILS, FAKE_SETTINGS } from '@src/mocks/testData';
import { EndPoints } from '@shared/enums';
import { envConfig } from '@shared/config';
import { requestsJobDetails, requestsJobs, requestsSettings } from './requestApi';

const mockAxios = new MockAdapter(axios);
const settingsResponse = { response: FAKE_SETTINGS };
const jobsResponse = { response: FAKE_JOBS };
const jobsDetailsResponse = { response: FAKE_JOB_DETAILS };
const url = envConfig.BASE_URL_API;
const settingsUrl = `${url}/${EndPoints.Settings}`;
const jobsUrl = `${url}/${EndPoints.Jobs}`;

afterEach(() => {
    mockAxios.reset();
});

describe('requestsSettings', () => {
    it('fetches Settings from an API', async () => {
        mockAxios.onGet(`${settingsUrl}`).reply(200, settingsResponse);

        requestsSettings.get(EndPoints.Settings).then(response => {
            expect(response).toEqual(settingsResponse);
        });
    });

    it('post Settings', async () => {
        mockAxios.onPost(`${settingsUrl}`, FAKE_SETTINGS).reply(200, settingsResponse);

        requestsSettings.post(EndPoints.Settings, FAKE_SETTINGS).then(response => {
            expect(response).toEqual(settingsResponse);
        });
    });

    it('put Settings', async () => {
        mockAxios.onPut(`${settingsUrl}`, FAKE_SETTINGS).reply(200, settingsResponse);

        requestsSettings.put(EndPoints.Settings, FAKE_SETTINGS).then(response => {
            expect(response).toEqual(settingsResponse);
        });
    });

    it('delete Settings', async () => {
        mockAxios.onDelete(`${settingsUrl}`, FAKE_SETTINGS).reply(200, settingsResponse);

        requestsSettings.delete(EndPoints.Settings).then(response => {
            expect(response).toEqual(settingsResponse);
        });
    });
});

describe('requestsJobs', () => {
    it('fetches Jobs from an API', async () => {
        mockAxios.onGet(`${jobsUrl}`).reply(200, jobsResponse);

        requestsJobs.get(EndPoints.Jobs).then(response => {
            expect(response).toEqual(jobsResponse);
        });
    });

    it('post Jobs', async () => {
        mockAxios.onPost(`${jobsUrl}`, FAKE_JOBS).reply(200, jobsResponse);

        requestsJobs.post(EndPoints.Jobs, FAKE_JOBS[0]).then(response => {
            expect(response).toEqual(jobsResponse);
        });
    });

    it('put Jobs', async () => {
        mockAxios.onPut(`${jobsUrl}`, FAKE_JOBS).reply(200, jobsResponse);

        requestsJobs.put(EndPoints.Jobs, FAKE_JOBS).then(response => {
            expect(response).toEqual(jobsResponse);
        });
    });

    it('delete Jobs', async () => {
        mockAxios.onDelete(`${jobsUrl}`, FAKE_JOBS).reply(200, jobsResponse);

        requestsJobs.delete(EndPoints.Jobs).then(response => {
            expect(response).toEqual(jobsResponse);
        });
    });
});

describe('requestsJobDetails', () => {
    it('fetches Job Details, if the job id was provided', async () => {
        mockAxios.onGet(`${jobsUrl}`, '12').reply(200, jobsDetailsResponse);

        requestsJobDetails.get(EndPoints.Jobs, '12').then(response => {
            expect(response).toEqual(jobsDetailsResponse);
        });
    });
});
