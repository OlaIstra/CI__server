import React from "react";

type Props = {
	text: string;
};

export const Title: React.FC<Props> = props => {
	return <div className='title'>{props.text}</div>;
};
