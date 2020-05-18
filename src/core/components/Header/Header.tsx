import React from "react";

import { H1 } from "../UI/H1/H1";
import "./Header.scss";

export const Header: React.FC = props => {
	return (
		<div className='header'>
			<H1 title='School CI server' />
		</div>
	);
};
