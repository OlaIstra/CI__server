import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import './Input.scss';
import { SettingsUnion } from '@server/components/settings/interfaces';

interface IProps {
    placeholder: string;
    classes?: string;
    icon?: string;
    inputValue: string | number;
    property: SettingsUnion;
    handleChange: (value: string, property: SettingsUnion) => void;
}

export const Input: React.FC<IProps> = ({
    placeholder,
    classes,
    icon,
    inputValue,
    property,
    handleChange,
}) => {
    const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange(event.currentTarget.value, property);
    };
    const handleDelete = () => {
        handleChange('', property);
    };

    const inputClass = classNames('input', classes);

    return (
        <div className='inputWrapper'>
            <input
                placeholder={placeholder}
                className={inputClass}
                value={inputValue}
                onChange={handleInputValue}
            />
            {icon ? <span className={icon} onClick={handleDelete}></span> : null}
        </div>
    );
};
