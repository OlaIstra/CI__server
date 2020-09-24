import React, { SyntheticEvent } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface IProps {
    classes?: string;
    icon?: string;
    handleClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IProps> = ({ classes, icon, children, handleClick }) => {
    const btnClass = classNames('btn', classes);

    return (
        <button className={btnClass} onClick={handleClick}>
            {icon && <span className={icon} />}
            {children}
        </button>
    );
};
