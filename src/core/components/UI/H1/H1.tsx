import React from "react";

import "./H1.scss";

interface IProps {
	title: string;
}

export const H1: React.FC<IProps> = ({ title }) => {
	return <h1>{title}</h1>;
};
