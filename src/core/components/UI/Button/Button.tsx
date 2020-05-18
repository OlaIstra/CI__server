import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface IProps {
	title: string;
	classes?: string;
	icon?: string;
}

export const Button: React.FC<IProps> = ({ title, classes, icon }) => {
	let btnClass = classNames("btn", classes);
	return (
		<button className={btnClass}>
			{icon ? <span className={icon}></span> : null}
			{title}
		</button>
	);
};
