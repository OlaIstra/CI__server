import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';
import { setTestId } from '@src/utils';

describe('Button', () => {
    it('should invoke handleClick function once, if button was clicked', () => {
        const mockHandleClick = jest.fn();

        const wrapper = shallow(<Button handleClick={mockHandleClick} />);
        wrapper.find(setTestId('button')).simulate('click');

        expect(mockHandleClick.mock.calls).toHaveLength(1);
    });

    it('should render icon, if it is provided', () => {
        const FAKE_ICON = 'icon';

        const wrapper = shallow(<Button icon={FAKE_ICON} />);

        expect(wrapper.find(setTestId('icon'))).toHaveLength(1);
    });
});
