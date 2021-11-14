import { IJobDetails } from './../../shared/interfaces/jobs';
import RootStore from '@core/store/rootStore';
import JobsStore from '@core/store/storeJobs';
import SettingsStore from '@core/store/storeSettings';
import { IJob } from '@shared/interfaces/jobs';
import { ISettings } from '@shared/interfaces/settings';

export const FAKE_JOBS: IJob[] = [
    {
        id: '1',
        commitMessage: 'test',
        commitHash: 'test',
        branchName: 'test',
        authorName: 'test',
        status: 'test',
    },
    {
        id: '12',
        commitMessage: 'test',
        commitHash: 'test',
        branchName: 'test',
        authorName: 'test',
        status: 'test',
    },
];

export const FAKE_SETTINGS: ISettings = {
    id: '1',
    repoName: 'test',
    buildCommand: 'test',
    mainBranch: 'test',
    timePeriod: 1,
};

export const FAIL_SETTINGS: ISettings = {
    id: '1',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: -10,
};

export const FAKE_JOBSSTORE = new JobsStore(FAKE_JOBS);
export const FAKE_SETTINGSSTORE = new SettingsStore(FAKE_SETTINGS);
export const FAKE_STORE = new RootStore({
    jobsStore: FAKE_JOBSSTORE,
    settingsStore: FAKE_SETTINGSSTORE,
});

export const FAKE_JOB_DETAILS: IJobDetails = {
    id: '1',
    commitMessage: 'test',
    commitHash: 'test',
    branchName: 'test',
    authorName: 'test',
    status: 'test',
    start: '11:11',
    duration: 'string',
};
