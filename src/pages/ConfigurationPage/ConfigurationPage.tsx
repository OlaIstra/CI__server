import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';
import './ConfigurationPage.scss';

export const ConfigurationPage = () => (
	<>
		<Header title='School CI server'>
			<Link to='/settings'>
				<Button title='Settings' icon='icon-settings' />
			</Link>
		</Header>
		<div className='configPage'>
			<div className='configPage_logo' />
			<Title text='Configure repository connection and synchronization settings' />
			<Link to='/settings'>
				<Button title='Open settings' classes='btn--primary' />
			</Link>
		</div>
	</>
);
