import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ConfigurationPage from './ConfigurationPage';
import { setTestId } from '@src/utils';

describe('ConfigurationPage', () => {
    // eslint-disable-next-line
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        wrapper = shallow(<ConfigurationPage />);
    });

    it('should render "Open Settings" button', () => {
        expect(wrapper.find(`${setTestId('button')}`)).toHaveLength(1);
    });

    it('should have a link to redirect to "Settings" page', () => {
        expect(
            wrapper
                .find(`${setTestId('settings-link')}`)
                .first()
                .props().to,
        ).toBe('/settings');
    });
});
