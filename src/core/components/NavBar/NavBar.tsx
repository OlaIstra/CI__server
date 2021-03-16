import React from 'react';

import { Navlink } from '../../atoms/NavLink/NavLink';
import './NavBar.scss';

export const NavBar = (props: { isAuth: boolean }) => {
    return (
        <ul className='navBar'>
            <Navlink link='/' exact title='Home' />
            <Navlink link='/about' title='About' />
            <Navlink link='/contacts' title='Contacts' />
            {props.isAuth && <Navlink link='/settings' title='Settings' />}
            {props.isAuth ? (
                <Navlink link='/logout' title='Logout' />
            ) : (
                <Navlink link='/auth' title='Authentication' />
            )}
        </ul>
    );
};
