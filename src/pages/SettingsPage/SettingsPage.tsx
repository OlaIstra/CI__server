import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../core/components/Header/Header";
import { Title } from "../../core/components/UI/Title/Title";
import { Button } from "../../core/components/UI/Button/Button";
import { Input } from "../../core/components/UI/Input/Input";
import "./SettingsPage.scss";

export const SettingsPage = () => {
	return (
		<>
			<Header title='School CI server' />
			<div className='settingsPage'>
				<Title text='Settings' classes='title--bold' />
				<Title
					text='Configure repository connection and synchronization settings.'
					classes='title--light'
				/>
				<form action='' className='form'>
					<div className='form__block'>
						<Title text='GitHub repository' />
						<Input placeholder='user-name/repo-name' />
					</div>
					<div className='form__block'>
						<Title text='Build command' />
						<Input
							placeholder='user-name/repo-name'
							icon='icon-cross'
						/>
					</div>
					<div className='form__block'>
						<Title text='Build command' />
						<Input placeholder='master' icon='icon-cross' />
					</div>
					<div className='form__info'>
						Synchronize every
						<Input placeholder='10' classes='input--block' />
						minutes
					</div>
					<div className='form__btns'>
						<Button title='Save' classes='btn--primary' />
						<Button title='Cancel' />
					</div>
				</form>
				<br />
				temporary to show history page
				<br />
				<Link to='/history'>
					<Button
						title='to history page'
						icon='icon-play'
						classes='btn--primary'
					/>
				</Link>
			</div>
		</>
	);
};
