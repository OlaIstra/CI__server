import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import RootStore from '../src/core/store/rootStore';
import { settingsService } from '@server/components/settings/settingsServices';
import { jobService } from './components/jobs/jobServices';

const initialSettings = {
    id: '',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: 0,
};

const initialJobs: never[] = [];

export const getInitialStore = async (store: RootStore) => {
    try {
        const resultSettings = (await settingsService.getSettings()) || initialSettings;

        store.settingsStore.setSettings(resultSettings);

        const resultJobs = (await jobService.getJobs()) || initialJobs;

        store.jobsStore.setJobs(resultJobs);

        return store;
    } catch (error) {
        throw new AppError('Failed to load data', HttpCode.NOT_FOUND);
    }
};
