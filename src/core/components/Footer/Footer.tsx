import React from "react";

import { Button } from "@atoms/Button/Button";
import { Title } from "@atoms/Title/Title";
import "./Footer.scss";

export const Footer: React.FC = () => (
	<div className='footer'>
		<div className='fottom__btns'>
			<Button title='Support' classes='btn--link' />
			<Button title='Learning' classes='btn--link' />
		</div>
		<Title text='© 2020 Your Name' classes='title--light' />
	</div>
);
