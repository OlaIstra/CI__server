import React, { Children } from 'react';

import classNames from 'classnames';
import './Button.scss';

interface IProps {
	classes?: string;
	icon?: string;
}

export const Button: React.FC<IProps> = ({ classes, icon, children }) => {
	const btnClass = classNames('btn', classes);

	return (
		<button className={btnClass}>
			{icon && <span className={icon} />}
			{children}
		</button>
	);
};
