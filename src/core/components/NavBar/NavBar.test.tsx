import { shallow } from 'enzyme';
import React from 'react';

import { NavBar } from './NavBar';

describe('NavBar', () => {
    it('should render settings link, if user is authenticated', () => {
        const wrapper = shallow(<NavBar isAuth />);

        expect(wrapper.find('Navlink[link="/settings"]')).toHaveLength(1);
    });

    it('should not render settings link, if user is not authenticated', () => {
        const wrapper = shallow(<NavBar isAuth={false} />);

        expect(wrapper.find('Navlink[link="/settings"]')).toHaveLength(0);
    });

    it('should render logout link, if user is authenticated', () => {
        const wrapper = shallow(<NavBar isAuth />);

        expect(wrapper.find('Navlink[link="/logout"]')).toHaveLength(1);
    });

    it('should not render auth link, if user is not authenticated', () => {
        const wrapper = shallow(<NavBar isAuth={false} />);

        expect(wrapper.find('Navlink[link="/auth"]')).toHaveLength(1);
    });
});
