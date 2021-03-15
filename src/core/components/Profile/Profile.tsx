import React from 'react';

import './Profile.scss';

interface IProps {
    name: string;
    foto: string;
}

export const Profile: React.FC<IProps> = ({ name, foto }) => (
    <div className='profile'>
        <span>{name}</span>
        <img src={foto} />
    </div>
);
