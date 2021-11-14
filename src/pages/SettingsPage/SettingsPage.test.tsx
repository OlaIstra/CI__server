import React from 'react';
import { shallow } from 'enzyme';

import * as useStoresHooks from '../../core/store/helpers/useStores';
import SettingsPage from './SettingsPage';
import { FAKE_SETTINGS, FAKE_STORE } from '@src/mocks/testData';

const mockUseStore = jest.spyOn(useStoresHooks, 'useStores');

describe('SettingsPage', () => {
    it('should send data from store into child component', () => {
        mockUseStore.mockReturnValue(FAKE_STORE);

        const wrapper = shallow(<SettingsPage />);

        expect(wrapper.find('Memo(wrappedComponent)').props()).toEqual({
            initialSettings: FAKE_SETTINGS,
        });
    });
});
