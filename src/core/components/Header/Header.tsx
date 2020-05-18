import React from "react";
import { H1 } from "../UI/H1/H1";
import "./Header.scss";

interface IProps {
	title: string;
	children?: any;
}

export const Header: React.FC<IProps> = ({ title, children }) => {
	return (
		<div className='header'>
			<H1 title={title} />
			{children}
		</div>
	);
};
