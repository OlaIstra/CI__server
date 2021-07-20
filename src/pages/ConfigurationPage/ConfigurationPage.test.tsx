import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ConfigurationPage from './ConfigurationPage';

describe('ConfigurationPage', () => {
    // eslint-disable-next-line
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        wrapper = shallow(<ConfigurationPage />);
    });

    it('should render "Open Settings" button', () => {
        expect(wrapper.find('[data-testid="button"]')).toHaveLength(1);
    });

    it('should have a link to redirect to "Settings" page', () => {
        expect(
            wrapper
                .find('[data-testid="link"]')
                .at(0)
                .props().to,
        ).toBe('/settings');
    });
});
