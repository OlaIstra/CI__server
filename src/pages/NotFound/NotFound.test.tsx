import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';
import { setTestId } from '@src/utils';

describe('NotFound', () => {
    it('should render "Go to main page" button', () => {
        const wrapper = shallow(<NotFound />);

        expect(wrapper.find(`${setTestId('button')}`)).toHaveLength(1);
    });

    it('should have a link to redirect to "Main" page', () => {
        const wrapper = shallow(<NotFound />);
        expect(
            wrapper
                .find(`${setTestId('link')}`)
                .at(0)
                .props().to,
        ).toBe('/');
    });
});
