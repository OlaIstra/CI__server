import React from 'react';

import classNames from 'classnames';
import './Title.scss';

interface IProps {
	text: string;
	classes?: string;
}

export const Title: React.FC<IProps> = ({ text, classes }) => {
	const titleClass = classNames('title', classes);

	return <div className={titleClass}>{text}</div>;
};
