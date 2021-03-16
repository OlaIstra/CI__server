import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLink.scss';

type Props = {
    link: string;
    title: string;
    exact?: boolean;
};

export const Navlink: React.FC<Props> = props => (
    <li>
        <NavLink to={props.link} exact={props.exact}>
            {props.title}
        </NavLink>
    </li>
);
