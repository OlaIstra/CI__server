import React from "react";
import { Button } from "../UI/Button/Button";
import { Title } from "../UI/Title/Title";
import "./Bottom.scss";

export const Bottom: React.FC = () => {
	return (
		<div className='bottom'>
			<div className='bottom__btns'>
				<Button title='Support' classes='btn--link' />
				<Button title='Learning' classes='btn--link' />
			</div>
			<Title text='© 2020 Your Name' classes='title--light' />
		</div>
	);
};
