import React from 'react';

import { NavBar } from '../NavBar/NavBar';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { Profile } from '../Profile/Profile';
import { Auth } from '../Auth/Auth';

import './Header.scss';

interface IProps {
    title?: string;
}

export const Header: React.FC<IProps> = () => (
    <div className='header'>
        <NavBar isAuth={true} />
        <div className='header__info'>
            <LangSwitcher lang='rus' />
            <Profile name={'Sergey Zhukov'} foto={'///'} />
            <Auth />
        </div>
    </div>
);
