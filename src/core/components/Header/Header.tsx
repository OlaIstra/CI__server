import React from "react";

import { H1 } from "@atoms/H1/H1";
import "./Header.scss";

interface IProps {
	title: string;
}

export const Header: React.FC<IProps> = ({ title, children }) => (
	<div className='header'>
		<H1 title={title} />
		{children}
	</div>
);
