import React from "react";
import { Title } from "../UI/Title/Title";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import "./Modal.scss";

interface IProps {
	title?: string;
	children?: any;
}

export const Modal: React.FC<IProps> = ({ title, children }) => {
	return (
		<div className='modal'>
			<Title text='New build' classes='title--huge' />
			<Title text='Enter the commit hash that you want to build' />
			<form action='' className='form'>
				<Input placeholder='Commit hash' icon='icon-cross' />
				<div className='form__btns'>
					<Button title='Run build' classes='btn--primary' />
					<Button title='Cancel' />
				</div>
			</form>
		</div>
	);
};
