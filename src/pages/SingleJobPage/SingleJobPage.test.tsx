import React from 'react';
import { shallow } from 'enzyme';

import * as useStoresHooks from '../../core/store/helpers/useStores';
import SingleJobPage from './SingleJobPage';
import { FAKE_STORE } from '@src/mocks/testData';
import { setTestId } from '@src/utils';

const mockUseStore = jest.spyOn(useStoresHooks, 'useStores');

jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockReturnValue({ id: '12' }),
}));

describe('SingleJobPage', () => {
    it('should render 1 job with logs, if its ID equals to the one in the JobStore', () => {
        mockUseStore.mockReturnValue(FAKE_STORE);

        const wrapper = shallow(<SingleJobPage />);

        expect(wrapper.find(`${setTestId('jobComponent')}`)).toHaveLength(1);
        expect(wrapper.find(`${setTestId('jobLogs')}`)).toHaveLength(1);
    });
});
