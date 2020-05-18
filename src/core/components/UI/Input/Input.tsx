import React from "react";
import classNames from "classnames";
import "./Input.scss";

interface IProps {
	placeholder: string;
	classes?: string;
	icon?: string;
}

export const Input: React.FC<IProps> = ({ placeholder, classes, icon }) => {
	let inputClass = classNames("input", classes);
	return (
		<div className='inputWrapper'>
			<input placeholder={placeholder} className={inputClass} />
			{icon ? <span className={icon}></span> : null}
		</div>
	);
};
