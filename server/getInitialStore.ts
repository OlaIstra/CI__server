import { ErrorMessage } from '@shared/error/errorMessage';
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

export const getInitialStore = async (store: RootStore) => {
    try {
        const resultSettings = (await settingsService.getSettings()) || initialSettings;

        store.settingsStore.setSettings(resultSettings);

        const resultJobs = (await jobService.getJobs()) || [];

        store.jobsStore.setJobs(resultJobs);

        return store;
    } catch (error) {
        throw new AppError(ErrorMessage.FAILED_LOAD_DATA, HttpCode.INTERNAL_SERVER_ERROR);
    }
};
