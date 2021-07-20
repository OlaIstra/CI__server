import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('NotFound', () => {
    it('should render "Go to main page" button', () => {
        const wrapper = shallow(<NotFound />);

        expect(wrapper.find('[data-testid="button"]')).toHaveLength(1);
    });

    it('should have a link to redirect to "Main" page', () => {
        const wrapper = shallow(<NotFound />);
        expect(
            wrapper
                .find('[data-testid="link"]')
                .at(0)
                .props().to,
        ).toBe('/');
    });
});
