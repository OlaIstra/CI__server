import React from 'react';
import classNames from 'classnames';
import './Title.scss';

interface IProps {
    classes?: string;
}

export const Title: React.FC<IProps> = ({ children, classes }) => {
    const titleClass = classNames('title', classes);

    return <div className={titleClass}>{children}</div>;
};
