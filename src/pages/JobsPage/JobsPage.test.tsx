import React from 'react';
import { shallow } from 'enzyme';

import * as useStoresHooks from '@core/store/helpers/useStores';
import JobsPage from './JobsPage';
import { IJob } from '@shared/interfaces/jobs';
import JobsStore from '@core/store/storeJobs';
import RootStore from '@core/store/rootStore';
import SettingsStore from '@core/store/storeSettings';
import { ISettings } from '@shared/interfaces/settings';
import { setTestId } from '@src/utils';

const mockUseStore = jest.spyOn(useStoresHooks, 'useStores');

const FAKE_SETTINGS: ISettings = {
    id: '1',
    repoName: 'test',
    buildCommand: 'test',
    mainBranch: 'test',
    timePeriod: 1,
};
const FAKE_JOBS: IJob[] = [
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

const FAKE_JOBSSTORE = new JobsStore(FAKE_JOBS);
const FAKE_SETTINGSSTORE = new SettingsStore(FAKE_SETTINGS);
const FAKE_STORE = new RootStore({
    jobsStore: FAKE_JOBSSTORE,
    settingsStore: FAKE_SETTINGSSTORE,
});

describe('JobsPage', () => {
    it('should render 2 jobs, if there are two job in the JobStore', () => {
        mockUseStore.mockReturnValue(FAKE_STORE);

        const wrapper = shallow(<JobsPage />);

        expect(wrapper.find(`${setTestId('jobComponent')}`)).toHaveLength(2);
    });

    it('should render no jobs, if there are no job in the JobStore', () => {
        const FAKE_JOBS_EMPTY: IJob[] = [];
        const FAKE_JOBSSTORE_EMPTY = new JobsStore(FAKE_JOBS_EMPTY);
        const FAKE_STORE_EMPTY = new RootStore({
            jobsStore: FAKE_JOBSSTORE_EMPTY,
            settingsStore: FAKE_SETTINGSSTORE,
        });
        mockUseStore.mockReturnValue(FAKE_STORE_EMPTY);

        const wrapper = shallow(<JobsPage />);

        expect(wrapper.find(`${setTestId('jobComponent')}`)).toHaveLength(0);
    });
});
