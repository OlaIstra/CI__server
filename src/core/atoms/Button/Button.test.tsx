import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

describe('Button', () => {
    it('should invoke handleClick function once, if button was clicked', () => {
        const mockHandleClick = jest.fn();

        const wrapper = shallow(<Button handleClick={mockHandleClick} />);
        wrapper.find('[data-testid="button"]').simulate('click');

        expect(mockHandleClick.mock.calls).toHaveLength(1);
    });

    it('should render icon, if it is provided', () => {
        const icon = 'icon';

        const wrapper = shallow(<Button icon={icon} />);

        expect(wrapper.find('[data-testid="icon"]')).toHaveLength(1);
    });
});
