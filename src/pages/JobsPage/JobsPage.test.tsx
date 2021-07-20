import React from 'react';
import { shallow } from 'enzyme';

import * as useStoresHooks from '../../core/store/helpers/useStores';
import JobsPage from './JobsPage';
import { FAKE_SETTINGSSTORE, FAKE_STORE } from '@src/mocks/testData';
import { IJob } from '@shared/interfaces/jobs';
import JobsStore from '@core/store/storeJobs';
import RootStore from '@core/store/rootStore';

const mockUseStore = jest.spyOn(useStoresHooks, 'useStores');

describe('JobsPage', () => {
    it('should render 2 jobs, if there are two job in the JobStore', () => {
        mockUseStore.mockReturnValue(FAKE_STORE);

        const wrapper = shallow(<JobsPage />);

        expect(wrapper.find('[data-testid="jobComponent"]')).toHaveLength(2);
    });

    it('should render no jobs, if there are no job in the JobStore', () => {
        const FAKE_JOBS: IJob[] = [];
        const FAKE_JOBSSTORE = new JobsStore(FAKE_JOBS);
        const FAKE_STORE = new RootStore({
            jobsStore: FAKE_JOBSSTORE,
            settingsStore: FAKE_SETTINGSSTORE,
        });
        mockUseStore.mockReturnValue(FAKE_STORE);

        const wrapper = shallow(<JobsPage />);

        expect(wrapper.find('[data-testid="jobComponent"]')).toHaveLength(0);
    });
});
