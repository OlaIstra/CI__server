import React from "react";
import { Title } from "../../core/components/UI/Title/Title";
import { Button } from "../../core/components/UI/Button/Button";
import "./ConfigurationPage.scss";

export const ConfigurationPage = props => {
	return (
		<div className='configPage'>
			<div className='configPage_logo' />
			<Title text='Configure repository connection and synchronization settings' />
			<Button title='Open settings'></Button>
		</div>
	);
};
