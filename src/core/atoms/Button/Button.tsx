import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface IProps {
    type?: 'button' | 'submit' | 'reset';
    classes?: string;
    icon?: string;
    handleClick?: () => void;
}

export const Button: React.FC<IProps> = ({ classes, icon, children, handleClick, type }) => {
    const btnClass = classNames('btn', classes);

    return (
        <button type={type} className={btnClass} onClick={handleClick} data-testid='button'>
            {icon && <span className={icon} data-testid='icon' />}
            {children}
        </button>
    );
};
