import React from "react";

import { Title } from "../UI/Title/Title";
import "./Bottom.scss";

export const Bottom: React.FC = props => {
	return (
		<div className='bottom'>
			<Title text='© 2020 Your Name' />
		</div>
	);
};
