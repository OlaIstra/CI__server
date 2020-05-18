import React from "react";

import { ConfigurationPage } from "../ConfigurationPage/ConfigurationPage";
import { Header } from "../../core/components/Header/Header";
import { Bottom } from "../../core/components/Bottom/Bottom";

import "./App.scss";

export const App = props => {
	return (
		<div className='app'>
			<Header />
			<div className='main'>
				<ConfigurationPage />
			</div>
			<Bottom />
		</div>
	);
};
