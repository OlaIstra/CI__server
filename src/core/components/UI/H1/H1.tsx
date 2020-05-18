import React from "react";

import "./H1.scss";

type Props = {
	title: string;
};

export const H1: React.FC<Props> = props => {
	return <h1>{props.title}</h1>;
};
