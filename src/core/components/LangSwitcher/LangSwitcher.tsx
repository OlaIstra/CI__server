import React from 'react';

import './LangSwitcher.scss';

interface IProps {
    lang: string;
}

export const LangSwitcher: React.FC<IProps> = ({ lang }) => (
    <div className='lang'>
        <a href='/'>{lang}</a>
    </div>
);
