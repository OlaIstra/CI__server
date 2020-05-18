import React from "react";
import classNames from "classnames";
import "./Title.scss";

interface IProps {
	text: string;
	classes?: string;
}

export const Title: React.FC<IProps> = ({ text, classes }) => {
	let titleClass = classNames("title", classes);
	return <div className={titleClass}>{text}</div>;
};
